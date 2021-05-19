var mongoose = require("mongoose");

var COMPOSITION = new mongoose.Schema({
  name: DV_TEXT,
  archetype_node_id: String,
  uid: UID_BASED_ID,
  links: [LINKS],
  archetype_details: ARCHETYPED,
  feeder_audit: FEEDER_AUDIT,
  language: CODE_PHRASE,
  territory: CODE_PHRASE,
  category: DV_CODED_TEXT,
  context: EVENT_CONTEXT,
  composer: PARTY_PROXY,
  content: [CONTENT_ITEM],
});

module.exports = mongoose.model("composition", COMPOSITION);
