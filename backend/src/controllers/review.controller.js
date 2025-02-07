const reviewService = require("../services/review.service");

const createReview = async (req, res) => {
  const user = req.user;
  try {
    const review = await reviewService.createReview(req.body, user);

    return res.status(201).send(review);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to create review: " + error.message });
  }
};

const getAllReviews = async (req, res) => {
  const productId = req.params.productId;
  try {
    const reviews = await reviewService.getAllReviews(productId);

    return res.status(200).send(reviews);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to get all reviews: " + error.message });
  }
};

module.exports = { createReview, getAllReviews };
