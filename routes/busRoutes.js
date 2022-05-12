const express = require('express');
const router = express.Router();
const {
    businessDetails,
    getBusinesDetails,
    updateBusinesDetails
} = require("../controllers/busController")

router.post('/postDetails', businessDetails);
router.get('/getDetails/:id', getBusinesDetails);
router.put('/updateDetails/:id', updateBusinesDetails);

module.exports = router;