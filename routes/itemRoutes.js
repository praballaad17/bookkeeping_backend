const express = require('express');
const router = express.Router();
const {
    addItem,
    getItemDetails,
    updateItemDetails,
    importItemBulk,
    getItemsByUserId,
    searchItem
} = require("../controllers/itemController")

router.post('/addItem', addItem);
router.get('/getItem/:id', getItemDetails);
router.get('/items/userId/:userId', getItemsByUserId);
router.get('/searchItem/:query', searchItem);
router.put('/updateItem/:id', updateItemDetails);
router.post('/importitem', importItemBulk);
module.exports = router;