const mongoose = require("mongoose");
const crypto = require("crypto");
const mongoURI = process.env.MONGOURI;
// const mongoURI = "mongodb://localhost:27017/Touch";

function mongofunction(app) {
  (async function () {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log("Connected to database");
    } catch (err) {
      console.error(err);
    }
  })();
}

module.exports = { mongoURI, mongofunction };
