const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/rating.controller");
const authenticate = require("../middleware/authenticate");

router.post("/create", authenticate, ratingController.createRating);
router.get("/product/:productId", authenticate, ratingController.getAllRatings);

module.exports = router;
