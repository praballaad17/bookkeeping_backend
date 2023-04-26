const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
  otp: {
    type: Number,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  email: String,
  createdAt: Date,
  expiredAt: Date,
});

const Otp = mongoose.model("OTP", OtpSchema);
module.exports = Otp;
