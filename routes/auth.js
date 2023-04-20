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
} = require("../controllers/authControllers");
const { updateBusinessDetails } = require("../controllers/busController");
const { getUser } = require("../controllers/userControllers");
router.get("/userId/:id", getUserById);
router.post("/login", loginAuthentication);
router.post("/register", register);
router.put("/password", requireAuth, changePassword);
router.put("/updateDetails/:userId", updateBusinessDetails);
router.get("/user/:userId", getUser);
router.get("/generate-otp/:userId", genrateOtp);
router.post("/verify-otp/", verifyOtp);
module.exports = router;
