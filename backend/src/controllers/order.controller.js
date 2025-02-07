const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
  const user = req.user;
  try {
    const createdOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to create order: " + error.message });
  }
};

const findOrderbyId = async (req, res) => {
  const user = req.user;
  try {
    const foundOrder = await orderService.findOrderById(req.params.id);
    if (!foundOrder) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res.status(200).send(foundOrder);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to find order: " + error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    const userHistory = await orderService.usersOrderHistory(user._id);
    if (!userHistory || userHistory.length === 0) {
      return res.status(200).send({ message: "No order history found" });
    }
    return res.status(200).send(userHistory);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to load user history: " + error.message });
  }
};

module.exports = { createOrder, findOrderbyId, orderHistory };
