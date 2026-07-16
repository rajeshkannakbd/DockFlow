import bcrypt from "bcrypt";
import Client from "../models/Clients.js";
import Staff from "../models/Staff.js";
import generateOTP from "../utils/generateOTP.js";
import generateToken from "../utils/generateToken.js";

/* ===========================================
   CLIENT - SEND OTP
=========================================== */

export const sendOtp = async (req, res) => {
  try {
    const { mobilenumber } = req.body;

    if (!mobilenumber) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required",
      });
    }

    const client = await Client.findOne({ mobilenumber });

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "This mobile number is not registered.",
      });
    }

    const otp = generateOTP();

    client.otp = otp;
    client.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await client.save();

    // Replace this later with SMS API
    console.log("OTP :", otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      otp, // Remove in production
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ===========================================
   CLIENT LOGIN
=========================================== */

export const clientLogin = async (req, res) => {

  try {

    const { mobilenumber, otp } = req.body;

    const client = await Client.findOne({ mobilenumber });

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    if (client.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (!client.otpExpiry || client.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    client.otp = null;
    client.otpExpiry = null;

    await client.save();

    const token = generateToken(client._id, "client");

    res.json({
      success: true,
      message: "Login Successful",
      token,
      user: client,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

/* ===========================================
   STAFF LOGIN
=========================================== */

export const staffLogin = async (req, res) => {

  try {

    const { employeeId, password } = req.body;

    const staff = await Staff.findOne({ employeeId });

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      staff.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = generateToken(
      staff._id,
      staff.role
    );

    res.json({
      success: true,
      message: "Login Successful",
      token,
      user: staff,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};