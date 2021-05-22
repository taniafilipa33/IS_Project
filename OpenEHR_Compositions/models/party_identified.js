var mongoose = require("mongoose");
var PARTY_PROXY = require("./party_proxy").schema;

var PARTY_IDENTIFIED = new mongoose.Schema({
  party_proxy: PARTY_PROXY,
  name: String,
  identifiers: [String],
});

module.exports = mongoose.model("party_identified", PARTY_IDENTIFIED);
