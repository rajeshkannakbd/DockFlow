import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.use("/api/document",documentRoutes);

export default app;