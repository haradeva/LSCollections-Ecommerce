const Review = require("../models/review.model");
const productService = require("../services/product.service");

const createReview = async (reqData, user) => {
  try {
    const product = await productService.findProductById(reqData.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    const review = new Review({
      user: user._id,
      product: product._id,
      review: reqData.review,
      createdAt: new Date(),
    });

    return await review.save();
  } catch (error) {
    throw new Error("Error creating review: " + error.message);
  }
};

const getAllReviews = async (productId) => {
  try {
    return await Review.find({ product: productId }).populate("user");
  } catch (error) {
    throw new Error("Error fetching reviews: " + error.message);
  }
};

module.exports = { createReview, getAllReviews };
