import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// not a protected route, everybody can be registered, but for admin to get all users is a protected route
router.route("/").post(registerUser).get(protect, admin, getUsers);
// router.post(
//   "/login", authUser
// );
router.route("/login").post(authUser);
// first the protect middleware comes into play and then the getUserProfile - protect always runs first
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
