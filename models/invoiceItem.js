const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceItemSchema = new Schema({
  itemId: {
    type: Schema.ObjectId,
    ref: "Item",
  },
  userId: {
    type: Schema.ObjectId,
    ref: "User",
  },
  invoice: {
    type: Schema.ObjectId,
    ref: "Invoice",
  },
  unit: {
    type: Number,
  },
});

const InvoiceItem = mongoose.model("InvoiceItem", InvoiceItemSchema);
module.exports = InvoiceItem;
