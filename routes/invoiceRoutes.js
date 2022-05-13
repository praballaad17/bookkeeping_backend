const express = require('express');
const router = express.Router();
const {
    addInvoice,
    getInvoiceDetails,
    updateInvoiceDetails
} = require("../controllers/invoiceController")

router.post('/addInvoice', addInvoice);
router.get('/getInvoice/:id', getInvoiceDetails);
router.put('/updateInvoice/:id', updateInvoiceDetails);

module.exports = router;