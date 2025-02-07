const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Failed to get all orders: " + error.message });
  }
};

const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.confirmedOrder(orderId);
    if (!orders) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res
      .status(200)
      .send({ message: "Order confirmed successfully", orders });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error confirming order: " + error.message });
  }
};

const shippOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.shipOrder(orderId);
    if (!orders) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res
      .status(200)
      .send({ message: "Order shipped successfully", orders });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error shipping order: " + error.message });
  }
};

const deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deliverOrder(orderId);
    if (!orders) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res
      .status(200)
      .send({ message: "Order delivered successfully", orders });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error delivering order: " + error.message });
  }
};

const cancelledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.cancelledOrder(orderId);
    if (!orders) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res
      .status(200)
      .send({ message: "Order canceled successfully", orders });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error canceling order: " + error.message });
  }
};

const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deleteOrder(orderId);
    if (!orders) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res
      .status(200)
      .send({ message: "Order deleted successfully", orders });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error deleting order: " + error.message });
  }
};

module.exports = {
  getAllOrders,
  confirmedOrders,
  shippOrders,
  deliverOrders,
  cancelledOrders,
  deleteOrders,
};
