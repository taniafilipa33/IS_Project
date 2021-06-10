var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var DV_PARSABLE = require("./dv_parsable").schema;
var ITEM_STRUCTURE = require("./item_structure").schema;

var ACTIVITY = new mongoose.Schema({
  locatable: LOCATABLE,
  timing: DV_PARSABLE,
  action_archetype_id: String,
  description: ITEM_STRUCTURE,
});

module.exports = mongoose.model("activity", ACTIVITY, "activity");
