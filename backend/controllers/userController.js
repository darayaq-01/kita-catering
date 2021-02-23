import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// AUTH AND LOGIN - WORKS!!!
// @ desc   Auth user & get token
// @ route  POST /api/users/login
// @ access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //   res.send({ email, password });

  const user = await User.findOne({ email: email });

  // await always returns a promise - matchPassword(password) - password is from the body, means plain text
  // trying to match the plain text password to the encrypted password - inside the user model bcrypt is used, therefore bcrypt does not need to be brought in the controller
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isClient: user.isClient,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// REGISTER A NEW USER - WORKS!!!
// @ desc   Register a new user
// @ route  POST /api/users
// @ access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, address, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    address,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      address,
      email: user.email,
      isAdmin: user.isAdmin,
      isClient: user.isClient,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//

// FOR EACH USER - GET PROFILE - WORKS!!!
// @ desc   Get user profile
// @ route  GET /api/users/profile
// @ access Private
const getUserProfile = asyncHandler(async (req, res) => {
  //   res.send("Success");
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
      isClient: user.isClient,
      children: user.children,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// UPDATE A USER THROUGH THE USER SELF - WORKS!!!
// @ desc   Update user profile
// @ route  PUT /api/users/profile
// @ access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  //   res.send("Success");
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.children = req.body.children || user.children;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      address: updatedUser.address,
      isClient: updatedUser.isClient,
      isAdmin: updatedUser.isAdmin,
      children: updatedUser.children,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// GET ALL REGISTERED USERS AT ONE PAGE - ADMIN ONLY - WORKS!!!
// @ desc   Get all users
// @ route  GET /api/users
// @ access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  // is '-password' in this case correct - the admin should also not see it, right?
  const users = await User.find({}).select("-password");
  res.json(users);
});

// DELETE A USER - ADMIN ONLY - WORKS!!!
// @ desc   Delete user
// @ route  DELETE /api/users/:id
// @ access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  //   res.send("Success");
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// GET A USER BY ID - ADMIN ONLY - WORKS!!!
// @ desc   Get user by ID
// @ route  GET /api/users/:id
// @ access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  // - password, to exclude the password from being fetched
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// UPDATE A USER - ADMIN ONLY - WORKS!!!
// @ desc   Update user
// @ route  PUT /api/users/:id
// @ access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.isAdmin = req.body.isAdmin;
    user.isClient = req.body.isClient;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      address: updatedUser.address,
      isAdmin: updatedUser.isAdmin,
      isClient: updatedUser.isClient,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
