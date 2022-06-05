const Party = require('../models/party');
const jwt = require('jwt-simple');

module.exports.addParty = async (req, res, next) => {
    const { userId, party } = req.body
    console.log(party, userId);
    const { name, phone, email, balance, partyType, gstin, placeOfSupply, panNumber, billAddress, shippingAddress, creditPeriod, creditLimit } = party
    try {
        const party = new Party({ name, userId, phone, email, balance, partyType, gstin, placeOfSupply, panNumber, billAddress, shippingAddress, creditPeriod, creditLimit })
        await party.save()
        return res.status(200).send(party)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports.getPartyById = async (req, res, next) => {
    const { partyId } = req.params
    try {
        const party = await Party.findById(partyId)
        return res.status(200).send(party)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports.getPartyByUserId = async (req, res, next) => {
    const { userId } = req.params
    try {
        const party = await Party.find({ userId })
        return res.status(200).send(party)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports.searchParty = async (req, res, next) => {
    const { query } = req.params
    try {
        const partyArray = await Party.find({ name: query })
        return res.status(200).send(partyArray)
    } catch (error) {
        return res.status(500).send(error)
    }
}