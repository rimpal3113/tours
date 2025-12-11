import express from "express";
import multer from "multer";
import path from "path";

import {
  addPackage,
  getPackages,
  updatePackage,
  deletePackage,
  
} from "../controllers/packageController.js";

const router = express.Router();

// Multer Storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addPackage);
router.get("/", getPackages);
router.put("/:id", upload.single("pack_img"), updatePackage);
router.delete("/:id", deletePackage);



export default router;
