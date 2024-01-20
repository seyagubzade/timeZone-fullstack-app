const mongoose = require("mongoose");

const TimeZone = mongoose.model(
  "TimeZone",
  new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    model: String,
    image: String
  })
);

module.exports = { TimeZone };
