var mongoose = require("mongoose");
var CODE_PHRASE = require("./code_phrase");
var DV_TEXT = require("./dv_text");

var DV_CODED_TEXT = new mongoose.Schema({
  dv_text: DV_TEXT,
  defining_code: CODE_PHRASE,
});

module.exports = mongoose.model("dv_coded_text", DV_CODED_TEXT);
