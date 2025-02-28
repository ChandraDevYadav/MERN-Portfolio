import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
} from "../controller/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

// Route to register user
router.post("/register", registerUser);

// Route to login user
router.post("/login", loginUser);

// Route to update user profile (protected by authentication)
router.put("/profile", authenticate, updateProfile);

// Route to log out user (protected by authentication)
router.post("/logout", authenticate, logoutUser);

export default router;
