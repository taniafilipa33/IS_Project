var mongoose = require("mongoose");
var DV_TEXT = require("./dv_text");
var UID_BASED_ID = require("./uid_based_id");
var LINK = require("./link");
var ARCHETYPED = require("./archetyped");
var FEEDER_AUDIT = require("./feeder_audit")

var LOCATABLE = new mongoose.Schema({
  name: DV_TEXT,
  archetype_node_id: String,
  uid: UID_BASED_ID,
  links: [LINK],
  archetype_details: ARCHETYPED,
  feeder_audit: FEEDER_AUDIT,
});

module.exports = mongoose.model("locatable", LOCATABLE);
