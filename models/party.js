const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.ObjectId,
        ref: "user"
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
    },
    balance: {
        type: Number,
    },
    partyType: {
        type: String,
    },
    partyCatagory: {
        type: String,
    },
    gstin: {
        type: String,
    },
    placeOfSupply: {
        type: String,
    },
    panNumber: {
        type: String,
    },
    billAddress: String,
    shippingAddress: String,
    creditPeriod: Number,
    creditLimit: Number,

});


const Party = mongoose.model('Party', PartySchema);
module.exports = Party;