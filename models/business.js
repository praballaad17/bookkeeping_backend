const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    businessName: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
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
                throw new Error('Invalid email address.');
            }
        },
    },
    gstpin: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    businessType: {
        type: String,
    },
    businessCategory: {
        type: String,
    },
    address: {
        type: String,
    },
    pincode: {
        type: Number,
    },
});

const Business = mongoose.model('Business', BusinessSchema);
module.exports = Business;
