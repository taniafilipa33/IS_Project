var mongoose = require("mongoose");
var LOCATABLE = require("locatable");

var COMPOSITION = new mongoose.Schema({
  locatable: LOCATABLE,
  language: CODE_PHRASE,
  territory: CODE_PHRASE,
  category: DV_CODED_TEXT,
  context: EVENT_CONTEXT,
  composer: PARTY_PROXY,
  content: [CONTENT_ITEM],
});

module.exports = mongoose.model("composition", COMPOSITION);
