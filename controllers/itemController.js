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

module.exports.importItemBulk = async (req, res, next) => {
  const { itemArray, userId } = req.body;
  console.log(itemArray, userId);
  itemArray.map(async (item) => {

    try {
      newItem = new Item({
        itemCode: item.Item_code,
        userId: userId,
        name: item.Item_name,
        purchasePrice: item.Purchase_price,
        salePrice: item.Sale_price,
        openigStockQuantity: item.Opening_stock_quantity,
        lowStockDialog: item.Minimum_stock_quantity,
        itemWiseTax: item.Tax_Rate,
        inclusionTax: item.Inclusive_Of_Tax
      })
      await newItem.save();
      console.log(newItem);
    } catch (error) {
      console.log(error);
    }
  })
  res.status(200).send("yes");
};

module.exports.getItemsByUserId = async (req, res, next) => {
  const { userId } = req.params
  const pageNumber = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (pageNumber - 1) * limit
  const endIndex = pageNumber * limit
  try {
    const itemArray = await Item.find({ userId: userId }).limit(limit).skip(startIndex).exec()
    console.log(itemArray);
    res.send(itemArray);
  } catch (err) {
    next(err);
  }
};