const Item = require("../models/item");
const jwt = require("jwt-simple");

module.exports.itemDetails = async (req, res, next) => {
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
    udateSalePrice,
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

    // if (document) return res.status(400).send('PhoneNo or email already used')

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
      udateSalePrice,
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
module.exports.getitemDetails = async (req, res, next) => {
  try {
    const company = await Item.findOne({ itemID: req.params.id });
    res.send(company);
  } catch (err) {
    next(err);
  }
};

module.exports.updateitemDetails = async (req, res, next) => {
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
    udateSalePrice,
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
          udateSalePrice,
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
