const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    itemCode: {
        type: String,
        require: true,
        unique: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String
    },
    purchasePrice: {
        type: Number
    },
    salePrice: {
        type: Number
    },
    openigStockQuantity: {
        type: String,
    },
    lowStockDialog: {
        type: String,
    },
    itemsUnit: {
        type: String,
    },
    defaultUnit: {
        type: String,
        // require: true,
    },
    itemCategory: {
        type: String,
    },
    partyWiseItemRate: {
        type: String,
    },
    description: {
        type: String,
    },
    itemWiseTax: {
        type: String,
    },
    inclusionTax: {
        type: String,
    },
    itemWiseDiscount: {
        type: String,
    },
    updateSalePrice: {
        type: String,
    },
    serialNo: {
        type: String,
    },
    mrp: {
        type: Number,
    },
    batchNo: {
        type: String,
    },
    expDate: {
        type: Date,
    },
    mfgDate: {
        type: Date,
    },
    modelNo: {
        type: Number,
    },
    size: {
        type: Number,
    },


});

const Item = mongoose.model('Items', ItemSchema);
module.exports = Item;
