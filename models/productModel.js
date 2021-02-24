import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Provide a name"],
      unique: true,
      minlength: [4, "The name should have at least 4 characters"],
      maxlength: [25, "Not more then 25 characters"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Provide an Image"],
    },
    category: {
      type: String,
      required: [true, "Provide a category"],
      // use enum?
      enum: {
        values: ["meal", "basket", "snacks"],
        message: "Available categories: meal, basket, snacks",
      },
    },
    description: {
      type: String,
      required: [true, "Provide a description"],
      trim: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: [true, "Provide a price"],
    },
    isVegan: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVegetarian: {
      type: Boolean,
      required: true,
      default: false,
    },
    isGlutenFree: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
