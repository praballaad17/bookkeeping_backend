const Party = require("../models/party");
const jwt = require("jwt-simple");
const Invoice = require("../models/invoice");

module.exports.addParty = async (req, res) => {
  const { userId, party } = req.body;

  const {
    name,
    phone,
    email,
    balance,
    partyType,
    gstType,
    gstin,
    placeOfSupply,
    panNumber,
    billAddress,
    shippingAddress,
    creditPeriod,
    creditLimit,
  } = party;
  console.log(party);
  try {
    const party = new Party({
      name,
      userId,
      phone,
      email,
      balance,
      partyType,
      gstType,
      gstin,
      placeOfSupply,
      panNumber,
      billAddress,
      shippingAddress,
      creditPeriod,
      creditLimit,
    });
    await party.save();
    return res.status(200).send(party);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.getPartyById = async (req, res, next) => {
  const { partyId } = req.params;
  try {
    const party = await Party.findById(partyId);
    return res.status(200).send(party);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.getPartyByUserId = async (req, res, next) => {
  const { userId, partyType } = req.params;
  try {
    let party;
    if (partyType === "all") {
      party = await Party.find({ userId });
    } else {
      party = await Party.find({ userId, partyType });
    }
    return res.status(200).send(party);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.searchParty = async (req, res, next) => {
  const { query } = req.params;
  try {
    const partyArray = await Party.find({ name: query });
    return res.status(200).send(partyArray);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.getPartyTransactions = async (req, res, next) => {
  const { partyId } = req.params;
  try {
    const transcations = await Invoice.find({ party: partyId });
    return res.status(200).send(transcations);
  } catch (error) {
    return res.status(500).send(error);
  }
};
