var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var PARTICIPATION = require("./participation").schema;
var CODE_PHRASE = require("./code_phrase").schema;
var ITEM_STRUCTURE = require("./item_structure").schema;
var PARTY_PROXY = require("./party_proxy").schema;
var OBJECT_REF = require("./object_ref").schema;
var DV_TEXT = require("./dv_text").schema;
var DV_PARSABLE = require("./dv_parsable").schema;
var ACTIVITY = require("./activity").schema;

var INSTRUCTIONS = new mongoose.Schema({
  locatable: LOCATABLE,
  language: CODE_PHRASE,
  encoding: CODE_PHRASE,
  other_participations: [PARTICIPATION],
  workflow_id: OBJECT_REF,
  subject: PARTY_PROXY,
  provider: PARTY_PROXY,
  protocol: ITEM_STRUCTURE,
  guideline_id: OBJECT_REF,
  narrative: DV_TEXT,
  expiry_time: Date,
  wf_definition: DV_PARSABLE,
  activities: [ACTIVITY],
});

module.exports = mongoose.model("instructions", INSTRUCTIONS, "instructions");
