var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var CODE_PHRASE = require("./code_phrase").schema;
const PARTICIPATION = require("./participation").schema;
var OBJECT_REF = require("./object_ref").schema;
var PARTY_PROXY = require("./party_proxy").schema;
var HISTORY_OF_ITEM_STRUCTURE = require("./history_of_item_structure").schema;

var OBSERVATION = new mongoose.Schema({
  locatable: LOCATABLE,
  language: CODE_PHRASE,
  encoding: CODE_PHRASE,
  other_paticipatios: PARTICIPATION,
  workflow_id: OBJECT_REF,
  subject: PARTY_PROXY,
  provider: PARTY_PROXY,
  guideline_id: OBJECT_REF,
  data: [HISTORY_OF_ITEM_STRUCTURE],
  state: [HISTORY_OF_ITEM_STRUCTURE]
});

module.exports = mongoose.model("observation", OBSERVATION);
