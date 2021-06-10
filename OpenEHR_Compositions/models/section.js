var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var EVALUATIONS = require("./evaluations").schema;
var OBSERVATION = require("./observation").schema;
var ADMIN_ENTRY = require("./admin_entry").schema;
var ACTION = require("./action").schema;
var INSTRUCTION = require("./instructions").schema;
var CITATION = require("./citation").schema;

var SECTION = new mongoose.Schema({
  locatable: LOCATABLE,
  items: [SECTION | EVALUATIONS | OBSERVATION | ADMIN_ENTRY | ACTION | INSTRUCTION | CITATION]
});

module.exports = mongoose.model("section", SECTION);
