const express = require('express');
const router = express.Router();
const {
    addParty,
    getPartyById,
    searchParty,
    getPartyByUserId,
    getPartyTransactions
} = require("../controllers/partyController")

router.post('/addParty', addParty);
router.get('/getPartyById/:partyId', getPartyById);
router.get('/partyTransactions/:partyId', getPartyTransactions);
router.get('/getPartyByUserId/:userId/partyType/:partyType', getPartyByUserId);
router.post('/searchParty/:query', searchParty);

module.exports = router;