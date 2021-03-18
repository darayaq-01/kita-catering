import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @ desc   Create new order
// @ route  POST /api/orders
// @ access Private
const addOrderItem = asyncHandler(async (req, res) => {
  const { orderItem, itemsPrice, taxPrice, totalPrice } = req.body;

  if (orderItem && orderItem.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItem,
      // the user._id comes from the token
      user: req.user._id,
      itemsPrice,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @ desc   Get order by id
// @ route  GET /api/orders/:id
// @ access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @ desc   Get logged in user orders
// @ route  GET /api/orders/myorders
// @ access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @ desc   Get all orders
// @ route  GET /api/orders
// @ access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// DELETE AN ORDER
// @ desc   Delete order
// @ route  DELETE /api/orders/:id
// @ access Private
const deleteOrderById = asyncHandler(async (req, res) => {
  //   res.send("Success");
  const order = await Order.findById(req.params.id);
  if (order) {
    await order.remove();
    res.json({ message: "Order removed" });
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// UPDATE AN ORDER
// @ desc   Update an order
// @ route  PUT /api/orders/:id
// @ access Private
const updateOrderById = asyncHandler(async (req, res) => {
  const { orderItem, itemsPrice, taxPrice, totalPrice } = req.body;

  const order = await Order.findById(req.params.id);

  if (order) {
    order.orderItem = orderItem;
    order.itemsPrice = itemsPrice;
    order.taxPrice = taxPrice;
    order.totalPrice = totalPrice;
    // order.user = user;

    const updatedOrder = await order.save();
    res.status(201).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export {
  addOrderItem,
  getOrderById,
  getMyOrders,
  getOrders,
  deleteOrderById,
  updateOrderById,
};
