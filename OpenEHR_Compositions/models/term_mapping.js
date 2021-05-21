var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text").schema;
var CODE_PHRASE = require("./code_phrase").schema;

var TERM_MAPPING = new mongoose.Schema({
  match: String,
  purpose: DV_CODED_TEXT,
  target: CODE_PHRASE,
});

module.exports = mongoose.model("term_mapping", TERM_MAPPING);
