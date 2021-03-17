import path from "path"
import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

// ROUTES - MAIN PATHS
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors())


// ... other imports 
/* const path = require("path") */

// ... other app.use middleware 


// LOGGING THE REQUEST METHOD AND ROUTE TO CONSOLE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//express.json() allows to accept json data in the body
app.use(express.json());

// SIMPLE LOGGING OF THE ROUTE, BUT WITHOUT ANY REQUEST METHOD - LIKE MORGAN
// app.use((req, res, next) => {
//   console.log(
//     "I am the first middleware - HELLO that is the request URL: ",
//     req.originalUrl
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("API is running");
});

// MAIN ROUTES PATHS
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// IMAGE UPLOAD ROUTE
// second way
// const folder = path.resolve();
// app.use("/uploads", express.static(path.join(folder, "/uploads")));
const __dirname = path.resolve();
// make the folder static, as an uploads folder // __dirname is not available in ES6, but in common js - so it gets mimiced above
app.use(express.static(path.join(__dirname, "client", "build")))
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Right before your app.listen(), add this:
//__dirname = dirname(fileURLToPath(import.meta.url));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV}-mode on Port ${PORT}`.yellow.bold
  )
);
