var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text").schema;
const LOCATABLE = require("./locatable").schema;
var PARTY_IDENTIFIED = require("./party_identified").schema;
var PARTICIPATION = require("./participation").schema;

var EVENT_CONTEXT = new mongoose.Schema({
  pathable: String,
  start_time: String,
  end_time: Date,
  location: Date,
  setting: DV_CODED_TEXT,
  other_context: LOCATABLE,
  health_care_facility: [PARTY_IDENTIFIED],
  participation: [PARTICIPATION],
});

mongoose.models = {};
module.exports = mongoose.model("event_context", EVENT_CONTEXT);
