var mongoose = require("mongoose");
var CODE_PHRASE = require("./code_phrase").schema;

var DV_DURATION = new mongoose.Schema({
  value: String,
  normal_status: CODE_PHRASE,
  magnitude_status: String,
  accuracy: Number,
  accuracy_is_percent: Boolean
});

module.exports = mongoose.model("dv_duration", DV_DURATION);
