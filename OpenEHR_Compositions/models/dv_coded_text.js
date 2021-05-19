var mongoose = require("mongoose");
var CODE_PRHASE = require("./code_phrase");
var DV_TEXT = require("./dv_text");

var DV_CODED_TEXT = new mongoose.Schema({
  dv_text: DV_TEXT,
  defining_code: CODE_PRHASE,
});

module.exports = mongoose.model("dv_coded_test", DV_CODED_TEXT);
