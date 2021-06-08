var mongoose = require("mongoose");

var OBJECT_ID = require("./object_id").schema;
var PARTY_REF = new mongoose.Schema({
  id: OBJECT_ID,
  namespace: String,
  type: String,
});

module.exports = mongoose.model("party_ref", PARTY_REF);
