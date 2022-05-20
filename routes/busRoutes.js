const express = require('express');
const router = express.Router();
const {
    businessDetails,
    getBusinessDetails,
    updateBusinessDetails
} = require("../controllers/busController")

router.post('/postDetails', businessDetails);
router.get('/getDetails/:id', getBusinessDetails);
router.put('/updateDetails/:id', updateBusinessDetails);

module.exports = router;