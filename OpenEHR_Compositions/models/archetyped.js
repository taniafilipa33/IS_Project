var mongoose = require("mongoose");

var ARCHETYPED = new mongoose.Schema({
  archetype_id: String,
  template_id: String,
  rm_version: String,
});

module.exports = mongoose.model("archetyped", ARCHETYPED);
