import express from "express";

import {
  sendOtp,
  clientLogin,
  staffLogin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/send-otp", sendOtp);

router.post("/client-login", clientLogin);

router.post("/staff-login", staffLogin);

export default router;