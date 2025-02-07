const cartService = require("../services/cart.service");

const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await cartService.findUserCart(user._id);
    if (!cart) {
      return res.status(404).send({ error: "Cart not found" }); // Added check for no cart
    }
    return res.status(200).send(cart);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to find user cart: " + error.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = req.user;
  if (!req.body.productId || !req.body.quantity) {
    return res.status(400).send({ error: "Missing productId or quantity" });
  }
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);
    return res.status(201).send(cartItem);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to add item to cart: " + error.message });
  }
};

module.exports = { findUserCart, addItemToCart };
