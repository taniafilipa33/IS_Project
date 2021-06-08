var mongoose = require("mongoose");
var DV_TEXT = require("./dv_text").schema;
var UID_BASED_ID = require("./uid_based_id").schema;
var LINK = require("./link").schema;
var ARCHETYPED = require("./archetyped").schema;
var FEEDER_AUDIT = require("./feeder_audit").schema;

var EVENT_CONTEXT = new mongoose.Schema({
  name: DV_TEXT,
  uid: UID_BASED_ID,
  links: [LINK],
  archetypeDetails: ARCHETYPED,
  feederAudit: FEEDER_AUDIT,
  archetypeNodeId: String,
});

mongoose.models = {};
module.exports = mongoose.model("event_context", EVENT_CONTEXT);
