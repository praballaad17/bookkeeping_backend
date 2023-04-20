const mongoose = require("mongoose");
const crypto = require("crypto");
const mongoURI = process.env.MONGOURI;
// const mongoURI = "mongodb://localhost:27017/bookkeeping";
function mongofunction(app) {
  (async function () {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database");
    } catch (err) {
      console.error(err);
    }
  })();
}

module.exports = { mongoURI, mongofunction };
