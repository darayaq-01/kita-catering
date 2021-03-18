import express from "express";
const router = express.Router();
import {
  addOrderItem,
  getOrderById,
  getMyOrders,
  getOrders,
  deleteOrderById,
  updateOrderById,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// for a request to /api/orders - - - order items
router.route("/").post(protect, addOrderItem).get(protect, admin, getOrders);

// show the users orders in the user profile
router.route("/myorders").get(protect, getMyOrders);

router
  .route("/myorders/:id")
  .delete(protect, deleteOrderById)
  .put(protect, updateOrderById);

// Order screen for single user
router.route("/:id").get(protect, getOrderById);

export default router;
