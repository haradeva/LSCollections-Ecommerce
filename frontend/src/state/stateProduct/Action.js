import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    colors = [],
    sizes = [],
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber = 1, // Ensure a valid default value
    pageSize = 10, // Ensure pageSize is at least 10
  } = reqData;

  try {
    // Ensure page number is valid
    const validPageNumber = Math.max(1, pageNumber);
    const colorsArray = Array.isArray(colors) ? colors : [colors];
    const sizesArray = Array.isArray(sizes) ? sizes : [sizes];

    // Create query parameters
    const queryParams = new URLSearchParams({
      colors: colorsArray.length ? colorsArray.join(",") : "",
      sizes: sizesArray.length ? sizesArray.join(",") : "",
      minPrice,
      maxPrice,
      stock,
      sort,
      pageNumber: validPageNumber,
      pageSize,
    });

    // Only append `minDiscount` if it's greater than 0
    if (minDiscount && Number(minDiscount) > 0) {
      queryParams.append("minDiscount", Number(minDiscount));
    }

    // Add `category` only if it's valid
    if (category && typeof category === "string") {
      queryParams.append("category", category);
    }
    // const { data } = await api.get(
    //   `/api/products?colors=${colorsParam}&sizes=${sizesParam}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${validPageNumber}&pageSize=${pageSize}`
    // );

    // const url = `/api/products?${queryParams.toString()}`;
    const url = `/api/products?pageNumber=${validPageNumber}&pageSize=${pageSize}`;
    console.log("Fetching products from:", url);

    const { data } = await api.get(url);
    console.log("Fetched product data:", data);

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error.response || error);
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/products/id/${reqData}`);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
