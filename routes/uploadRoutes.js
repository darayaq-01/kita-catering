import express from "express";
import multer from "multer";
import path from "path";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    // via path the image gets the format that it has in original
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
// single: for a single image only - but can be selected also for multiple
// needs to be called image in the frontend
router.route("/").post(protect, admin, upload.single("image"), (req, res) => {
  // the path gets send back
  res.send(`/${req.file.path.replace("\\", "/")}`);
});

export default router;
