const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const RequestError = require('../errorTypes/RequestError');

const UserSchema = new Schema({
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
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        minlength: 6,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
