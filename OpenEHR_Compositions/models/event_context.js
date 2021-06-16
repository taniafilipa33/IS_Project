var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text").schema;
const ITEM_STRUCTURE = require("./locatable").schema;
var PARTY_IDENTIFIED = require("./party_identified").schema;
var PARTICIPATION = require("./participation").schema;
var DV_TEXT = require("./dv_text").schema;

var EVENT_CONTEXT = new mongoose.Schema({
  startTime: DV_TEXT,
  endTime: Date,
  location: String,
  setting: DV_CODED_TEXT,
  other_context: ITEM_STRUCTURE,
  health_care_facility: [PARTY_IDENTIFIED],
  participation: [PARTICIPATION],
});

mongoose.models = {};
module.exports = mongoose.model("event_context", EVENT_CONTEXT);
