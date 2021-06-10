var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var ITEM_STRUCTURE = require("./item_structure").schema;

var INSTRUCTION_DETAILS = new mongoose.Schema({
  instruction_id: LOCATABLE,
  activity_id: String,
  wf_details: ITEM_STRUCTURE,
});

module.exports = mongoose.model("instruction_details", INSTRUCTION_DETAILS);
