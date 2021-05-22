var mongoose = require("mongoose");
var DV_TEXT = require("./dv_text").schema;
var DV_URI = require("./dv_uri").schema;

var LINK = new mongoose.Schema({
  meaning: DV_TEXT,
  type: DV_TEXT,
  target: DV_URI,
});

module.exports = mongoose.model("link", LINK);
