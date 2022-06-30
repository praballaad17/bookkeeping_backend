const express = require('express');
const router = express.Router();
const {
    addInvoice,
    getInvoiceDetails,
    updateInvoiceDetails,
    getInvoiceUserId,
    deleteInvoice,
    createInvoicePdf,
    getPdfInvoice,
} = require("../controllers/invoiceController")

router.post('/addInvoice', addInvoice);
router.get('/invoiceId/:invoiceId', getInvoiceDetails);
router.post('/invoice-pdf', createInvoicePdf)
router.get('/get-pdf-invoice', getPdfInvoice)
router.get('/invoiceId/:userId/type/:type', getInvoiceUserId);
router.put('/userId/:userId/invoiceId/:invoiceId', updateInvoiceDetails);
router.delete('/invoice/:id', deleteInvoice);

module.exports = router;