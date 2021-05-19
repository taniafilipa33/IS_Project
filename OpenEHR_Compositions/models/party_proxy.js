var mongoose = require("mongoose");
var Object_REF = require("./object_ref");

var PARTY_PROXY = new mongoose.Schema({
  external_ref: Object_REF,
});

module.exports = mongoose.model("party_proxy", PARTY_PROXY);
