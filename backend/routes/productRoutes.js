import express from "express";
// import mongoose from "mongoose";

const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  // createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get(
//   "/"
// );
router.route("/").get(getProducts).post(protect, admin, createProduct);

// router.route("/:id/reviews").post(protect, createProductReview);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
