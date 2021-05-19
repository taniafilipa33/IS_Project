var mongoose = require("mongoose");

var LOCATABLE = new mongoose.Schema({
  name: DV_TEXT,
  archetype_node_id: String,
  uid: UID_BASED_ID,
  links: [LINKS],
  archetype_details: ARCHETYPED,
  feeder_audit: FEEDER_AUDIT,
});

module.exports = mongoose.model("locatable", LOCATABLE);
