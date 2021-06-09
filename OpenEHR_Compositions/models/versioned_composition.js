var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var CODE_PHRASE = require("./code_phrase").schema;
const Object_REF = require("./object_ref").schema;

var VERSIONED_COMPOSITION = new mongoose.Schema({
  _type: String,
  locatable: LOCATABLE,
  uid: CODE_PHRASE,
  owner_id: Object_REF,
  time_created: String,
});

module.exports = mongoose.model(
  "Versioned_Composition",
  VERSIONED_COMPOSITION,
  "Versioned_Composition"
);
