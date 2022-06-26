const Invoice = require("../models/invoice");
const Party = require("../models/party");
const { validatePhoneNo } = require("../utils/validation");

module.exports.addInvoice = async (req, res, next) => {
    // const { invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total } = req.body;
    const { itemlist, userId, invoiceNumber, type, total, partyId, date } = req.body

    // const phoneNoError = validatePhoneNo(phoneNo);
    // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    try {
        // newInvoice = new Invoice({invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total});
        newInvoice = new Invoice({ itemIds: itemlist, total, date, user: userId, type, party: partyId, invoiceNumber })
        await newInvoice.save();

        res.status(201).send(newInvoice);
    } catch (err) {
        next(err);
    }
}

module.exports.getInvoiceDetails = async (req, res, next) => {
    try {
        const newInvoice = await Invoice.findOne({ _id: req.params.id });
        res.send(newInvoice);
    } catch (err) {
        next(err);
    }
}

module.exports.getInvoiceUserId = async (req, res, next) => {
    const { userId, type } = req.params
    try {
        const invoices = await Invoice.find({ type, user: userId }).populate("party", ["name", "balance"])
        return res.status(200).send(invoices)
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

module.exports.deleteInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.deleteOne({ _id: req.params.id })
        return res.status(200).send("deleted")
    } catch (error) {
        return res.status(500).send(error)
    }
}