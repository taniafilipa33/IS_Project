var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var DV_DURATION = require("./dv_duration").schema;
var ITEM_STRUCTURE = require("./item_structure").schema;

var HISTORY_OF_ITEM_STRUCTURE = new mongoose.Schema({
  locatable: LOCATABLE,
  origin: Date,
  period: DV_DURATION,
  duration: DV_DURATON,
  summary: ITEM_STRUCTURE
});

module.exports = mongoose.model("history_of_item_structure", HISTORY_OF_ITEM_STRUCTURE);
