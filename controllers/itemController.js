const Item = require("../models/itemInventory");
const jwt = require("jwt-simple");

module.exports.addItem = async (req, res, next) => {
  const {
    itemID,
    stockMaintenance,
    lowStockDialog,
    itemsUnit,
    defaultUnit,
    itemCategory,
    partyWiseItemRate,
    description,
    itemWiseTax,
    itemWiseDiscount,
    updateSalePrice,
    serialNo,
    mrp,
    batchNo,
    expDate,
    mfgDate,
    modelNo,
    size,
  } = req.body;

  try {
    const document = await Item.findOne({ itemID: itemID });

    newItem = new Item({
      itemID,
      stockMaintenance,
      lowStockDialog,
      itemsUnit,
      defaultUnit,
      itemCategory,
      partyWiseItemRate,
      description,
      itemWiseTax,
      itemWiseDiscount,
      updateSalePrice,
      serialNo,
      mrp,
      batchNo,
      expDate,
      mfgDate,
      modelNo,
      size,
    });

    await newItem.save();

    res.status(201).send(newItem);
  } catch (err) {
    next(err);
  }
};
module.exports.getItemDetails = async (req, res, next) => {
  try {
    const company = await Item.findOne({ itemID: req.params.id });
    res.send(company);
  } catch (err) {
    next(err);
  }
};

module.exports.updateItemDetails = async (req, res, next) => {
  const {
    itemID,
    stockMaintenance,
    lowStockDialog,
    itemsUnit,
    defaultUnit,
    itemCategory,
    partyWiseItemRate,
    description,
    itemWiseTax,
    itemWiseDiscount,
    updateSalePrice,
    serialNo,
    mrp,
    batchNo,
    expDate,
    mfgDate,
    modelNo,
    size,
  } = req.body;

  try {
    const retrivedItem = await Item.updateOne(
      { itemID: req.params.id },
      {
        $set: {
          itemID,
          stockMaintenance,
          lowStockDialog,
          itemsUnit,
          defaultUnit,
          itemCategory,
          partyWiseItemRate,
          description,
          itemWiseTax,
          itemWiseDiscount,
          updateSalePrice,
          serialNo,
          mrp,
          batchNo,
          expDate,
          mfgDate,
          modelNo,
          size,
        },
      }
    );
    res.status(201).send(retrivedItem);
  } catch (err) {
    next(err);
  }
};
