var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var CLUSTER = require("./cluster").schema;

var CITATION = new mongoose.Schema({
  locatable: LOCATABLE,
  meta_data: CLUSTER,
  source_type: String,
  source_ref: LOCATABLE,
  source_parent_ref: LOCATABLE,
  resolved: String,
});

module.exports = mongoose.model("citation", CITATION, "citation");
