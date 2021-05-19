var mongoose = require("mongoose");
var LOCATABLE = require("./locatable");
var DV_CODED_TEXT = require("./dv_coded_text");
var CODE_PHRASE = require("./code_phrase");
var EVENT_CONTEXT = require("./event_context");
var PARTY_PROXY = require("./party_proxy");
const Object_REF = require("./object_ref");

var VERSIONED_COMPOSITION = new mongoose.Schema({
  _type: String,
  locatable: LOCATABLE,
  uid: CODE_PHRASE,
  owner_id: Object_REF,
  time_created: Date,
});

module.exports = mongoose.model("versioned_composition", VERSIONED_COMPOSITION);
