var mongoose = require("mongoose");
var DV_TEXT = require("./dv_text").schema;
var DV_CODED_TEXT = require("./dv_coded_text").schema;
const PARTY_PROXY = require("./party_proxy").schema;

var EVENT_CONTEXT = new mongoose.Schema({
  function: DV_TEXT,
  mode: DV_CODED_TEXT,
  performer: PARTY_PROXY,
  time: String,
});

module.exports = mongoose.model("event_context", EVENT_CONTEXT);
