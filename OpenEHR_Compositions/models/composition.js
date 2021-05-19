var mongoose = require("mongoose");
var LOCATABLE = require("./locatable");
var DV_CODED_TEXT = require("./dv_coded_text");
var CODE_PHRASE = require("./code_phrase");
var EVENT_CONTEXT = require("./event_context");
var PARTY_PROXY = require("./party_proxy");

var COMPOSITION = new mongoose.Schema({
  locatable: LOCATABLE,
  language: CODE_PHRASE,
  territory: CODE_PHRASE,
  category: DV_CODED_TEXT,
  context: EVENT_CONTEXT,
  composer: PARTY_PROXY,
  content: [LOCATABLE],
});

module.exports = mongoose.model("composition", COMPOSITION);
