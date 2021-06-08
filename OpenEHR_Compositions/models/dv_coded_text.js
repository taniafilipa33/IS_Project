var mongoose = require("mongoose");
var DV_URI = require("./dv_uri");
var TERM_MAPPING = require("./term_mapping");
var CODE_PHRASE = require("./code_phrase").schema;

var DV_CODED_TEXT = new mongoose.Schema({
  value: String,
  hyperlink: DV_URI,
  formatting: String,
  mappings: [TERM_MAPPING],
  language: CODE_PHRASE,
  encoding: CODE_PHRASE,
  defining_code: CODE_PHRASE,
});

module.exports = mongoose.model("dv_coded_text", DV_CODED_TEXT);
