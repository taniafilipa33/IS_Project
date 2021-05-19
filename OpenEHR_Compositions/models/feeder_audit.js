var mongoose = require("mongoose");
var DV_IDENTIFIER = require("./dv_identifier");
var DV_ENCAPSULATED = require("./dv_encapsulated");
var FEEDER_AUDIT_DETAILS = require("./feeder_audit_details");

var FEEDER_AUDIT = new mongoose.Schema({
  originating_system_item_ids: [DV_IDENTIFIER],
  feeder_system_item_ids: [DV_IDENTIFIER],
  original_content: DV_ENCAPSULATED,
  originating_system_audit: FEEDER_AUDIT_DETAILS,
  feeder_system_audit: FEEDER_AUDIT_DETAILS,
});

module.exports = mongoose.model("feeder_audit", FEEDER_AUDIT);
