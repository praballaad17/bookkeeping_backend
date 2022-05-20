const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    invoiceID: {
        type: String,
        unique: true,
        required:true,
    },
    shipedTo: {
        type: String,
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        require:true,
    },
    todayDate: {
        type: String,
        // default:  Date.now,
        require:true,
    },
    dueDate: {
        type: String,
        require:true,
    },
    itemIds: [{
        type: Schema.Types.ObjectId,
        ref:"Items",
    }],
    subTotal: {
        type: Number,
    },
    gstTax: {
        type: Number,
    },
    Discount: {
        type: Number,
    },
    total: {
        type: Number,
    },
})

const Invoice = mongoose.model("Invoices", InvoiceSchema);
module.exports = Invoice;