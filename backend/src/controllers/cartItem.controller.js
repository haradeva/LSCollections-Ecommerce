const cartItemService = require("../services/cartItem.service");

const updateCartItem = async (req, res) => {
  const user = await req.user;
  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    if (!updatedCartItem) {
      return res.status(404).send({ error: "Cart item not found" });
    }
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to update cart item: " + error.message });
  }
};

const removeCartItem = async (req, res) => {
  const user = await req.user;
  try {
    const cartItem = await cartItemService.removeCartItem(
      user._id,
      req.params.id
    );

    if (!cartItem) {
      return res.status(404).send({ error: "Cart item not found" });
    }

    return res.status(200).send({ message: "Cart item removed successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to remove cart item: " + error.message });
  }
};

module.exports = { updateCartItem, removeCartItem };
