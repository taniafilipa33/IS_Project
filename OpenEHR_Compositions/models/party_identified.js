var mongoose = require("mongoose");
var PARTY_REF = require("./party_ref").schema;
var DV_IDENTIFIERS = require("./dv_identifier").schema;

var PARTY_IDENTIFIED = new mongoose.Schema({
  external_Ref: PARTY_REF,
  name: String,
  identifiers: [DV_IDENTIFIERS],
});

module.exports = mongoose.model("party_identified", PARTY_IDENTIFIED);
