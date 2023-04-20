const Party = require("../models/party");
const Invoice = require("../models/invoice");
const FileReport = require("../models/fileReport");

module.exports.getSalesInvoice = async (req, res) => {
  const { userId, start, end } = req.params;
  try {
    const invoices = await Invoice.find({
      user: userId,
      type: "sales",
      date: { $gte: start, $lte: end },
    })
      .populate("party", ["name", "balance", "gstType", "gstin"])
      .populate({ path: "itemIds", populate: { path: "itemId" } });

    return res.status(200).send(invoices);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.getPurchaseInvoice = async (req, res) => {
  const { userId } = req.params;
  try {
    const invoices = await Invoice.find({
      user: userId,
      type: "purchase",
    })
      .populate("party", ["name", "balance", "gstType", "gstin"])
      .populate({ path: "itemIds", populate: { path: "itemId" } });
    return res.status(200).send(invoices);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.fillGstReport = async (req, res) => {
  const { userId } = req.params;
  const { date, reportType, invoices } = req.body;
  try {
    const fileReport = new FileReport({
      user: userId,
      date,
      isFilled: true,
      reportType,
      invoices,
    });

    await fileReport.save();

    return res.status(200).send(fileReport);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports.getFillingDetails = async (req, res) => {
  const { userId, monthFinancialYear } = req.params;

  try {
    const fileReport = await FileReport.find({
      monthFinancialYear,
      user: userId,
    })
      .populate("invoices")
      .populate({
        path: "invoices",
        populate: {
          path: "party",
          select: ["name", "balance", "gstType", "gstin"],
        },
      })
      .populate({
        path: "invoices",
        populate: { path: "itemIds", populate: { path: "itemId" } },
      });

    return res.status(200).send(fileReport);
  } catch (error) {
    return res.status(404).send("Report Is Not Been Filed");
  }
};

module.exports.getGSTR1FillingDetails = async (req, res) => {
  const { userId, monthFinancialYear, start, end } = req.params;

  try {
    const fileReport = await FileReport.findOne({
      monthFinancialYear,
      user: userId,
      reportType: "GSTR1",
    })
      .populate({
        path: "invoices",
        populate: {
          path: "party",
          select: ["name", "balance", "gstType", "gstin"],
        },
      })
      .populate({
        path: "invoices",
        populate: { path: "itemIds", populate: { path: "itemId" } },
      });

    if (!fileReport) {
      const invoices = await Invoice.find({
        user: userId,
        type: "sales",
        date: { $gte: start, $lte: end },
      })
        .populate("party", ["name", "balance", "gstType", "gstin"])
        .populate({ path: "itemIds", populate: { path: "itemId" } });

      return res.status(200).send({ invoices, isFound: false });
    }
    return res.status(200).send({ fileReport, isFound: true });
  } catch (error) {
    return res.status(404).send("Report Is Not Been Filed");
  }
};

module.exports.getGSTR3BFillingDetails = async (req, res) => {
  const { userId, monthFinancialYear, start, end } = req.params;

  try {
    const fileReport = await FileReport.findOne({
      monthFinancialYear,
      user: userId,
      reportType: "GSTR3B",
    })
      .populate({
        path: "invoices",
        populate: {
          path: "party",
          select: ["name", "balance", "gstType", "gstin"],
        },
      })
      .populate({
        path: "invoices",
        populate: { path: "itemIds", populate: { path: "itemId" } },
      });

    if (!fileReport) {
      const invoices = await Invoice.find({
        user: userId,
        type: "purchase",
        date: { $gte: start, $lte: end },
        // date: { $gte: "2023-03-01", $lte: "2023-04-01" },
      })
        .populate("party", ["name", "balance", "gstType", "gstin"])
        .populate({ path: "itemIds", populate: { path: "itemId" } });

      return res.status(200).send({ invoices, isFound: false });
    }
    return res.status(200).send({ fileReport, isFound: true });
  } catch (error) {
    return res.status(404).send("Report Is Not Been Filed");
  }
};

module.exports.postFillingDetails = async (req, res) => {
  const { userId } = req.params;
  const { reportType, invoices, monthFinancialYear } = req.body;
  try {
    const fileReport = new FileReport({
      user: userId,
      date: new Date(),
      isFilled: true,
      reportType,
      invoices,
      monthFinancialYear,
    });

    await fileReport.save();

    return res.status(200).send(fileReport);
  } catch (error) {
    return res.status(500).send(error);
  }
};
