var mongoose = require("mongoose");
var PARTY_IDENTIFIED = require("./party_identified");
var PARTY_PROXY = require("./party_proxy");
var DV_DATE_TIME = require("./dv_date_time");
var PARTY_IDENTIFIED = require("./party_identified");
var LOCATABLE = require("./locatable");

var FEEDER_AUDIT_DETAILS = new mongoose.Schema({
    system_id: String,
    location: PARTY_IDENTIFIED,
    subject: PARTY_PROXY,
    provider: PARTY_IDENTIFIED,
    time: DV_DATE_TIME,
    version_id: String,
    other_details: LOCATABLE,
});

module.exports = mongoose.model("feeder_audit_details", FEEDER_AUDIT_DETAILS);
