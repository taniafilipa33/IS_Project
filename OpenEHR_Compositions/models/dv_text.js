var mongoose = require("mongoose");
var DV_URI = require("./dv_uri");
var TERM_MAPPING = require("./term_mapping");
var CODE_PHRASE = require("./code_phrase");

var DV_TEXT = new mongoose.Schema({
  data_value: String,
  value: String,
  hyperlink: DV_URI,
  fromatting: String,
  mappings: [TERM_MAPPING],
  language: CODE_PHRASE,
  encoding: CODE_PHRASE,
});

module.exports = mongoose.model("dv_text", DV_TEXT);
