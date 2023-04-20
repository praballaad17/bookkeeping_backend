const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  businessName: {
    type: String,
  },
  phoneNo: {
    type: Number,
    minlength: 10,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address.");
      }
    },
  },
  gstin: {
    type: String,
  },
  description: {
    type: String,
  },
  businessType: {
    type: String,
  },
  gstType: {
    type: String,
  },
  address: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  state: String,
});

const Business = mongoose.model("Business", BusinessSchema);
module.exports = Business;
