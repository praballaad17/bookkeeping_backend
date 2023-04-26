const express = require("express");
const router = express.Router();

const {
  loginAuthentication,
  register,
  requireAuth,
  changePassword,
  getUserById,
  genrateOtp,
  verifyOtp,
  resetPassOtp,
} = require("../controllers/authControllers");
const { updateBusinessDetails } = require("../controllers/busController");
const { getUser } = require("../controllers/userControllers");
router.get("/userId/:id", getUserById);
router.post("/login", loginAuthentication);
router.post("/register", register);
router.put("/change-password", changePassword);
router.put("/updateDetails/:userId", updateBusinessDetails);
router.get("/user/:userId", getUser);
router.get("/generate-otp/:userId", genrateOtp);
router.get("/forgot-pass-generate-otp/:email", resetPassOtp);
router.post("/verify-otp/", verifyOtp);
module.exports = router;
