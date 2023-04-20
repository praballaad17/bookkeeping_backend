const Invoice = require("../models/invoice");
const Party = require("../models/party");
const pdf = require("html-pdf");
const { validatePhoneNo } = require("../utils/validation");

const pdfTemplate = require("../Tamplete/template2");
const InvoiceItem = require("../models/invoiceItem");

module.exports.addInvoice = async (req, res, next) => {
  const { itemlist, userId, invoiceNumber, type, total, partyId, date } =
    req.body;

  try {
    const newInvoice = new Invoice({
      total,
      date,
      user: userId,
      type,
      party: partyId,
      invoiceNumber,
    });

    let newItemList = [];

    itemlist.map(async (item) => {
      const newinvoiceitem = new InvoiceItem({
        userId,
        invoice: newInvoice._id,
        itemId: item._id,
        unit: item.unit,
      });
      newItemList.push(newinvoiceitem._id);
      await newinvoiceitem.save();
    });
    newInvoice.itemIds = newItemList;
    await newInvoice.save();

    res.status(201).send(newInvoice);
  } catch (err) {
    next(err);
  }
};

module.exports.getInvoiceDetails = async (req, res, next) => {
  try {
    const newInvoice = await Invoice.findOne({
      _id: req.params.invoiceId,
    }).populate("party");
    res.send(newInvoice);
  } catch (err) {
    next(err);
  }
};

module.exports.createInvoicePdf = async (req, res) => {
  try {
    pdf
      .create(pdfTemplate(req.body), {})
      .toFile(`${__dirname}/result.pdf`, (err) => {
        if (err) {
          console.log(err);
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      });
  } catch (err) {
    res.send(err);
  }
};

module.exports.getPdfInvoice = async (req, res) => {
  try {
    res.sendFile(`${__dirname}/result.pdf`);
  } catch (err) {
    res.send(err);
  }
};

module.exports.getInvoiceUserId = async (req, res, next) => {
  const { userId, type } = req.params;

  console.log(userId, type);
  try {
    const invoices = await Invoice.find({ type, user: userId })
      .populate("party", ["name", "balance", "gstType"])
      .populate({ path: "itemIds", populate: { path: "itemId" } });

    console.log(invoices);
    return res.status(200).send(invoices);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports.updateInvoiceDetails = async (req, res, next) => {
  const { invoiceId } = req.params;
  const { itemlist, invoiceNumber, type, total, partyId, date } = req.body;
  // const phoneNoError = validatePhoneNo(phoneNo);
  // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

  try {
    const updatedInvoice = await Invoice.findOneAndUpdate(
      { _id: invoiceId },
      {
        $set: {
          invoiceNumber: invoiceNumber,
          type: type,
          date: date,
          party: partyId,
          total: total,
        },
      },
      {
        new: true,
      }
    );

    itemlist.map(async (item) => {
      if (item.isEdited) {
        console.log(item);
        const updated = await InvoiceItem.findOneAndUpdate(
          { _id: item._id },
          {
            $set: {
              unit: item.unit,
              itemId: item.itemId,
            },
          },
          {
            new: true,
          }
        );
      }
    });

    res.status(201).send({
      updatedInvoice,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.deleteOne({ _id: req.params.id });
    return res.status(200).send("deleted");
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.searchInvoice = async (req, res) => {
  console.log(req.params.searchKey);
  try {
    const invoice = await Invoice.find({
      $or: [
        // { party: req.params.searchKey },
        { phoneNo: req.params.searchKey },
        { invoiceNumber: { $regex: req.params.searchKey } },
        { phoneNo: req.params.searchKey },
      ],
    });
    return res.status(200).send(invoice);
  } catch (error) {
    return res.status(500).send(error);
  }
};
