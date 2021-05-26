var mongoose = require("mongoose");

var OBJECT_ID = require("./object_id").schema;
var Object_REF = new mongoose.Schema({
  id: OBJECT_ID,
  namespace: String,
  type: String,
});

module.exports = mongoose.model("object_ref", Object_REF);
