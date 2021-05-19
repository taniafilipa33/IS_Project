var mongoose = require("mongoose");

var DV_IDENTIFIER = new mongoose.Schema({
  data_value: String,
  issuer: String,
  assigner: String,
  id: String,
  type: String,
});

module.exports = mongoose.model("dv_identifier", DV_IDENTIFIER);
