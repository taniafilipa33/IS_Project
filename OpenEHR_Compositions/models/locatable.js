var mongoose = require("mongoose");
var DV_TEXT = require("./dv_text").schema;
var UID_BASED_ID = require("./uid_based_id").schema;
var LINK = require("./link").schema;
var ARCHETYPED = require("./archetyped").schema;
var FEEDER_AUDIT = require("./feeder_audit").schema;

var LOCATABLE = new mongoose.Schema({
  name: DV_TEXT,
  uid: UID_BASED_ID,
  links: [LINK],
  archetype_details: ARCHETYPED,
  feeder_audit: FEEDER_AUDIT,
  archetype_node_id: String,
});

module.exports = mongoose.model("locatable", LOCATABLE);
