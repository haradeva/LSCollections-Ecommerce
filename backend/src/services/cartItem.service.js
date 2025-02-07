const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemByID(cartItemId);
    if (!item) {
      throw new Error("Cart item not found: ", cartItemId);
    }

    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("User not found: ", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updateCartItem = await item.save();
      return updateCartItem;
    } else {
      throw new Error("you can't update the cart item ");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemByID(cartItemId);
    const user = await userService.findUserById(userId);
    if (user._id.toString() === cartItem.userId.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);
    } else {
      throw new Error("you can't remove another users item ");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemByID = async (cartItemId) => {
  try {
    const cartItem = await CartItem.findById(cartItemId);
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("Cart item not found with id ", cartItemId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateCartItem, removeCartItem, findCartItemByID };
