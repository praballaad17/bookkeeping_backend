const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  invoiceNumber: {
    type: String,
    // unique: true,
    // required: true,
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: "Party",
  },
  type: {
    type: String,
  },
  shipedTo: {
    type: String,
    // required: true,
  },
  shippingAddress: {
    type: String,
    // required: true,
  },
  phoneNo: {
    type: Number,
    // require: true,
  },
  todayDate: {
    type: String,
    // default:  Date.now,
    // require: true,
  },
  date: {
    type: Date,
    // require:true,
  },
  itemIds: {
    type: [Schema.Types.ObjectId],
    ref: "InvoiceItem",
  },
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
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);
module.exports = Invoice;
