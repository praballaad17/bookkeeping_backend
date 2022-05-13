const express = require('express');
const router = express.Router();
const {
    addItem,
    getItemDetails,
    updateItemDetails
} = require("../controllers/itemController")

router.post('/addItem', addItem);
router.get('/getItem/:id', getItemDetails);
router.put('/updateItem/:id', updateItemDetails);

module.exports = router;