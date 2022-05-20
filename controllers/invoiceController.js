const Invoice = require("../models/invoice");
const InvoiceItem = require("../models/invoiceItem");
const {validatePhoneNo} = require("../utils/validation");

module.exports.addInvoice = async (req, res, next) => {
    const { invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total } = req.body;

    const phoneNoError = validatePhoneNo(phoneNo);
    // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    try {
        newInvoice = new Invoice({invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total});

        await newInvoice.save();

        res.status(201).send(newInvoice);
    } catch (err) {
        next(err);
    }
}

module.exports.getInvoiceDetails = async (req, res, next) => {
    try {
        const newInvoice = await Invoice.findOne({ invoiceID: req.params.id });
        res.send(newInvoice);
    } catch (err) {
        next(err);
    }
}

module.exports.updateInvoiceDetails = async (req, res, next) => {

    const { invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total } = req.body;

    const phoneNoError = validatePhoneNo(phoneNo);
    // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    try {
        const updatedInvoice = await Invoice.findOneAndUpdate({ invoiceID: req.params.id },
            {
                $set: {
                    invoiceID: invoiceID,
                    shipedTo: shipedTo,
                    shippingAddress: shippingAddress,
                    phoneNo: phoneNo,
                    todayDate: todayDate,
                    dueDate: dueDate,
                    itemIds:itemIds,
                    subTotal: subTotal,
                    gstTax: gstTax,
                    Discount: Discount,
                    total: total,
                }
            });
        res.status(201).send({
            invoice: {
                invoiceID: updatedInvoice.invoiceID,
                shipedTo: updatedInvoice.shipedTo,
                total: updatedInvoice.total,
            },
        });
    } catch (err) {
        next(err);
    }
}