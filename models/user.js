const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


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

UserSchema.pre('save', function (next) {
    const saltRounds = 10;
    // Check if the password has been modified
    if (this.modifiedPaths().includes('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) return next(err);
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) return next(err);
                this.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});



const User = mongoose.model('User', UserSchema);
module.exports = User;
