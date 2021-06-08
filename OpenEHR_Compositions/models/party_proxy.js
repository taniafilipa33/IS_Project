var mongoose = require("mongoose");
var PARTY_REF = require("./party_ref").schema;

var PARTY_PROXY = new mongoose.Schema({
  external_ref: PARTY_REF,
});

module.exports = mongoose.model("party_proxy", PARTY_PROXY);
