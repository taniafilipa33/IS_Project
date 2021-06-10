var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var GENERIC_ENTRY = require("./generic_entry").schema;
var SECTION = require("./section").schema;
var EVALUATION = require("./evaluation").schema;
var OBSERVATION = require("./observation").schema;
var ADMIN_ENTRY = require("./admin_entry").schema;
var ACTION = require("./action").schema;
var INSTRUCTION = require("./instruction").schema;
var VIEW_SECTION = require("./view_section").schema;
var CITATION = require("./citation").schema;

var SECTION = new mongoose.Schema({
  locatable: LOCATABLE,
  items: [SECTION | EVALUATION | OBSERVATION | ADMIN_ENTRY | ACTION | INSTRUCTION | CITATION]
});

module.exports = mongoose.model("section", SECTION);
