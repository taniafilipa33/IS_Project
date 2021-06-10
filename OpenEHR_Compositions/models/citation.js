var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var CLUSTER = require("./cluster").schema;
var LOCATABLE_REF = require("./locatable_ref").schema;

var CITATION = new mongoose.Schema({
  locatable: LOCATABLE,
  meta_data: CLUSTER,
  source_type: String,
  source_ref: LOCATABLE_REF,
  source_parent_ref: LOCATABLE_REF,
  resolved: String,
});

module.exports = mongoose.model("citation", CITATION, "citation");
