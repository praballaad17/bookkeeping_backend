const express = require('express');
const router = express.Router();
const {
    addParty,
    getPartyById,
    searchParty,
    getPartyByUserId
} = require("../controllers/partyController")

router.post('/addParty', addParty);
router.get('/getPartyById/:partyId', getPartyById);
router.get('/getPartyByUserId/:userId', getPartyByUserId);
router.post('/searchParty/:query', searchParty);

module.exports = router;