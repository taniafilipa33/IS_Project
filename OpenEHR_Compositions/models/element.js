var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var DV_TEXT = require("./dv_text").schema;
var DV_CODED_TEXT = require("./dv_coded_text").schema;

var ELEMENT = new mongoose.Schema({
  locatable: LOCATABLE,
  null_flavour: DV_CODED_TEXT,
  value: String,
  null_reason: DV_TEXT,
});

module.exports = mongoose.model("element", ELEMENT, "element");
