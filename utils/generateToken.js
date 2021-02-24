import jwt from "jsonwebtoken";

// takes id as an argument -- will be in the token
const generateToken = (id) => {
  // JWT_SECRET should at least have 32 characters
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default generateToken;
