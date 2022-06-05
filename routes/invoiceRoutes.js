const express = require('express');
const router = express.Router();
const {
    addInvoice,
    getInvoiceDetails,
    updateInvoiceDetails,
    getPurchaseInvoiceUserId
} = require("../controllers/invoiceController")

router.post('/addInvoice', addInvoice);
router.get('/getInvoice/:id', getInvoiceDetails);
router.get('/getPurchaseInvoice/:userId', getPurchaseInvoiceUserId);
router.put('/updateInvoice/:id', updateInvoiceDetails);

module.exports = router;