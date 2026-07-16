import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Staff from "./models/Staff.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const password = await bcrypt.hash("admin123", 10);

await Staff.create({
  name: "Administrator",
  employeeId: "ADMIN001",
  password,
  role: "admin",
});

console.log("Admin Created");

process.exit();