var mongoose = require("mongoose");
var CODE_PHRASE = require("./code_phrase").schema;

var DV_PARSABLE = new mongoose.Schema({
  charset: CODE_PHRASE,
  language: CODE_PHRASE,
  value: String,
  formalism: String,
});

module.exports = mongoose.model("dv_parsable", DV_PARSABLE);
