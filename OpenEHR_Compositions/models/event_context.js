var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text").schema;
const ITEM_STRUCTURE = require("./locatable").schema;
var PARTY_IDENTIFIED = require("./party_identified").schema;
var PARTICIPATION = require("./participation").schema;

var EVENT_CONTEXT = new mongoose.Schema({
  start_time: Date,
  end_time: Date,
  location: String,
  setting: DV_CODED_TEXT,
  other_context: ITEM_STRUCTURE,
  health_care_facility: [PARTY_IDENTIFIED],
  participation: [PARTICIPATION],
});

mongoose.models = {};
module.exports = mongoose.model("event_context", EVENT_CONTEXT);
