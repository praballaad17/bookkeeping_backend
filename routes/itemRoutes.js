const express = require('express');
const router = express.Router();
const {
    itemDetails,
    getitemDetails,
    updateitemDetails
} = require("../controllers/itemController")

router.post('/addItem', itemDetails);
router.get('/getItem/:id', getitemDetails);
router.put('/updateItem/:id', updateitemDetails);

module.exports = router;