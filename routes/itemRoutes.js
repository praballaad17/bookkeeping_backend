const express = require('express');
const router = express.Router();
const {
    addItem,
    getItemDetails,
    updateItemDetails,
    importItemBulk,
    getItemsByUserId
} = require("../controllers/itemController")

router.post('/addItem', addItem);
router.get('/getItem/:id', getItemDetails);
router.get('/items/userId/:userId', getItemsByUserId);
router.put('/updateItem/:id', updateItemDetails);
router.post('/importitem', importItemBulk);

module.exports = router;