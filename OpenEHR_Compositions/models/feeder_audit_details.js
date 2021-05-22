var mongoose = require("mongoose");
var PARTY_IDENTIFIED = require("./party_identified").schema;
var PARTY_PROXY = require("./party_proxy").schema;
var LOCATABLE = require("./locatable");

var FEEDER_AUDIT_DETAILS = new mongoose.Schema({
  system_id: String,
  location: PARTY_IDENTIFIED,
  subject: PARTY_PROXY,
  provider: PARTY_IDENTIFIED,
  time: Date,
  version_id: String,
  other_details: LOCATABLE,
});

module.exports = mongoose.model("feeder_audit_details", FEEDER_AUDIT_DETAILS);
