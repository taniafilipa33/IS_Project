var mongoose = require("mongoose");

var DV_URI = new mongoose.Schema({
  data_value: String,
  value: String,
});

module.exports = mongoose.model("dv_uri", DV_URI);
