import express from "express";

import upload from "../middleware/upload.js";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  uploadDocument,
} from "../controllers/documentController.js";

const router = express.Router();

router.post(
  "/upload",
  authMiddleware("admin", "staff"),
  upload.single("file"),
  uploadDocument
);

export default router;