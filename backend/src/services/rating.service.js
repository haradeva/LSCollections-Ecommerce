const Rating = require("../models/rating.model");
const productService = require("../services/product.service");

const createRating = async (reqData, user) => {
  try {
    const product = await productService.findProductById(reqData.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    if (reqData.rating < 1 || reqData.rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }

    const existingRating = await Rating.findOne({
      product: product._id,
      user: user._id,
    });
    if (existingRating) {
      throw new Error("User has already rated this product");
    }

    const rating = new Rating({
      product: product._id,
      user: user._id,
      rating: reqData.rating,
      createdAt: new Date(),
    });

    return await rating.save();
  } catch (error) {
    throw new Error("Error creating rating: " + error.message);
  }
};

const getProductRating = async (productId) => {
  try {
    return await Rating.find({ product: productId }).populate("user");
  } catch (error) {
    throw new Error("Error fetching reviews: " + error.message);
  }
};

module.exports = { createRating, getProductRating };
