var mongoose = require("mongoose");

var OBJECT_ID = new mongoose.Schema({
  _type: String,
  value: String,
});

module.exports = mongoose.model("OBJECT_ID", OBJECT_ID);
