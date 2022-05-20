const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceItemSchema = new Schema({
    itemID: {
        type: String,
        require: true,
        unique:true,
    },
    itemsUnit: {
        type: String,
    },
    description: {
        type: String,   
    },
    quantity: {
        type:Number,
    },
    mrp: {
        type: Number,   
    },
    expDate: {
        type: Date,     
    },
    mfgDate: {
        type: Date,    
    },
    totalPrice:{
        type:Number,
    }

});

const InvoiceItem = mongoose.model('InvoiceItems', InvoiceItemSchema);
module.exports = InvoiceItem;
