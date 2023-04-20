const express = require("express");
const router = express.Router();
const {
  getSalesInvoice,
  getPurchaseInvoice,
  postFillingDetails,
  getFillingDetails,
  getGSTR1FillingDetails,
  getGSTR3BFillingDetails,
} = require("../controllers/gstController");

// router.post("/addInvoice", addInvoice);
router.get("/sales/:userId/:start/:end", getSalesInvoice);
router.get("/purchase/:userId", getPurchaseInvoice);
router.get("/fill-detail/:userId/:monthFinancialYear", getFillingDetails);
router.get(
  "/fill-detail-gstr1/:userId/:monthFinancialYear/:start/:end",
  getGSTR1FillingDetails
);
router.get(
  "/fill-detail-gstr3b/:userId/:monthFinancialYear/:start/:end",
  getGSTR3BFillingDetails
);
router.post("/fill-detail/:userId", postFillingDetails);
module.exports = router;
