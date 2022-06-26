const express = require('express');
const router = express.Router();
const {
    addInvoice,
    getInvoiceDetails,
    updateInvoiceDetails,
    getInvoiceUserId,
    deleteInvoice
} = require("../controllers/invoiceController")

router.post('/addInvoice', addInvoice);
router.get('/getInvoice/:id', getInvoiceDetails);
router.get('/invoiceId/:userId/type/:type', getInvoiceUserId);
router.put('/userId/:userId/invoiceId/:invoiceId', updateInvoiceDetails);
router.delete('/invoice/:id', deleteInvoice);

module.exports = router;