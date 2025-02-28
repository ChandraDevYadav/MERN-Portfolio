import express from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost, // ✅ Import updatePost function
} from "../controller/postController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/create", upload.array("images", 5), createPost); // Accepts multiple images
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", upload.array("images", 5), updatePost); // ✅ Add update route
router.delete("/:id", deletePost); // Ensure this route exists

export default router;
