const Invoice = require("../models/invoice");
const Party = require("../models/party");
const pdf = require('html-pdf');
const { validatePhoneNo } = require("../utils/validation");

const pdfTemplate = require('../Tamplete/template1');

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

module.exports.createInvoicePdf = async (req, res) => {
    try {
        pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/result.pdf`, (err) => {
            if (err) {
                res.send(Promise.reject());
            }
            res.send(Promise.resolve());
        });
    } catch (err) {
        res.send(err);
    }
}

module.exports.getPdfInvoice = async (req, res) => {
    try {
        res.sendFile(`${__dirname}/result.pdf`)
    } catch (err) {
        res.send(err);
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
    const { invoiceId } = req.params
    // const { invoiceID, shipedTo, shippingAddress, phoneNo, todayDate, dueDate, itemIds, subTotal, gstTax, Discount, total } = req.body;
    const { itemlist, invoiceNumber, type, total, partyId, date } = req.body
    // const phoneNoError = validatePhoneNo(phoneNo);
    // if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    try {
        const updatedInvoice = await Invoice.findOneAndUpdate({ _id: invoiceId },
            {
                $set: {
                    invoiceNumber: invoiceNumber,
                    type: type,
                    date: date,
                    party: partyId,
                    itemIds: itemlist,
                    total: total,
                }
            }, {
            new: true
        });
        res.status(201).send({
            updatedInvoice
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