const ratingService = require("../services/rating.service");

const createRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await ratingService.createRating(req.body, user);

    return res.status(201).send(rating);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to create rating: " + error.message });
  }
};

const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  try {
    const ratings = await ratingService.getProductRating(productId);

    return res.status(200).send(ratings);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to get all ratings: " + error.message });
  }
};

module.exports = { createRating, getAllRatings };
