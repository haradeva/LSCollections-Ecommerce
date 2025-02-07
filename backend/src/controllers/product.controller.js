const productService = require("../services/product.service");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to create product: " + error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to delete product: " + error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }
    return res.status(200).send(product);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to update product: " + error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to find product: " + error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await productService.getAllProducts(req.query);
    return res.status(200).send(product);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to get all products: " + error.message });
  }
};

const createMultipleProducts = async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Products created successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to create multiple products: " + error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProducts,
};
