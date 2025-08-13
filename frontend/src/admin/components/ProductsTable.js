import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Paper,
  Avatar,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../state/stateProduct/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  console.log("product-----:", product);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    const requestData = {
      category: "", // Ensure it's not undefined
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0, // Convert to number
      sort: "price_low",
      pageNumber: 1,
      pageSize: 1000,
      stock: "",
    };

    console.log("Dispatching findProducts with:", requestData);

    dispatch(findProducts(requestData));
  }, [product.deletedProduct, dispatch]);
  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item?.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item?.title}
                  </TableCell>
                  <TableCell align="left">{item?.category?.name}</TableCell>
                  <TableCell align="left">{item?.price}</TableCell>
                  <TableCell align="left">{item?.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleProductDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTable;
