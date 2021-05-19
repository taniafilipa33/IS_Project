var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text");
var LOCATABLE = require("./locatable");
var PARTY_IDENTIFIED = require("./party_identified");

var EVENT_CONTEXT = new mongoose.Schema({
  pathable: String,
  start_time: String,
  end_time: String,
  location: String,
  setting: DV_CODED_TEXT,
  other_context: LOCATABLE,
  health_care_facility: [PARTY_IDENTIFIED],
  participation: [Participation],
});

module.exports = mongoose.model("event_context", EVENT_CONTEXT);
