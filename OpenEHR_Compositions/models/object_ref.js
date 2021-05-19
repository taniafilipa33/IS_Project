var mongoose = require("mongoose");

var Object_REF = new mongoose.Schema({
  namespace: String,
  type: String,
  id: String,
});

module.exports = mongoose.model("object_ref", Object_REF);
