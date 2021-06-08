var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var DV_CODED_TEXT = require("./dv_coded_text").schema;
var CODE_PHRASE = require("./code_phrase").schema;
var EVENT_CONTEXT = require("./event_context").schema;
var PARTY_PROXY = require("./party_proxy").schema;

var Composition = new mongoose.Schema({
  locatable: LOCATABLE,
  language: CODE_PHRASE,
  territory: CODE_PHRASE,
  category: DV_CODED_TEXT,
  composer: PARTY_PROXY,
  context: EVENT_CONTEXT,
  content: [LOCATABLE],
});

module.exports = mongoose.model("Composition", Composition, "Composition");
