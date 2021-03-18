import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// GET ALL AVAILABLE PRODUCTS - WORKS!!!
// @ desc   Fetch all products
// @ route  GET /api/products
// @ access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET A SINGLE PRODUCT BY ID - WORKS!!!
// @ desc   Fetch single product
// @ route  GET /api/products
// @ access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    // res.status(404).json({ message: "Product not found" });
    res.status(404);
    // throw new Error to provide with more customized errors
    throw new Error("Product not found");
  }
});

// DELETE A PRODUCT BY ID - ADMIN ONLY -
// @ desc   Delete a product
// @ route  DELETE /api/products/:id
// @ access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    // res.status(404).json({ message: "Product not found" });
    res.status(404);
    // throw new Error to provide with more customized errors
    throw new Error("Product not found");
  }
});

// CREATE A PRODUCT - ADMIN ONLY - WORKS!!!
// @ desc   Create a product
// @ route  POST /api/products
// @ access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    category,
    description,
    ingredients,
    price,
    isVegan,
    isVegetarian,
    isGlutenFree,
    availableAt,
  } = req.body;

  const productExists = await Product.findOne({ name: name });

  if (productExists) {
    res.status(400);
    throw new Error("Product already exists");
  }

  const product = new Product({
    user: req.user._id,
    name,
    image,
    category,
    description,
    ingredients,
    price,
    isVegan,
    isVegetarian,
    isGlutenFree,
    availableAt,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// UPDATE A PRODUCT - ADMIN ONLY - WORKS!!!
// @ desc   Update a product
// @ route  PUT /api/products/:id
// @ access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    category,
    description,
    ingredients,
    price,
    isVegan,
    isVegetarian,
    isGlutenFree,
    availableAt,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.image = image;
    product.category = category;
    product.description = description;
    product.ingredients = ingredients;
    product.price = price;
    product.isVegan = isVegan;
    product.isVegetarian = isVegetarian;
    product.isGlutenFree = isGlutenFree;
    product.availableAt = availableAt;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
