const Invoice = require("../models/invoice");
const InvoiceItem = require("../models/invoiceItem");
const { validatePhoneNo } = require("../utils/validation");

module.exports.addInvoice = async (req, res, next) => {
    // const { invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total } = req.body;
    const { itemlist, userId, type, total } = req.body
    console.log(req.body);

    // const phoneNoError = validatePhoneNo(phoneNo);
    // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    try {
        // newInvoice = new Invoice({invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total});
        newInvoice = new Invoice({ itemIds: itemlist, total, todayDate: new Date(), userId, type })
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

module.exports.getPurchaseInvoiceUserId = async (req, res, next) => {
    const { userId } = req.params
    try {
        const invoiceArray = await Invoice.find({ type: "purchase", userId })
        return res.status(200).send(invoiceArray)
    } catch (error) {
        return res.status(500).send(error)
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
                    itemIds: itemIds,
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