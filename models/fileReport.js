const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const FileReportSchema = new Schema({
  isFilled: {
    type: Boolean,
  },
  date: {
    type: Date,
  },
  reportType: {
    type: String,
  },
  invoices: {
    type: [Schema.Types.ObjectId],
    ref: "Invoice",
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  monthFinancialYear: {
    type: String,
  },
});

const FileReport = mongoose.model("FileReport", FileReportSchema);
module.exports = FileReport;
