var mongoose = require("mongoose");
var DV_CODED_TEXT = require("./dv_coded_text").schema;
var DV_TEXT = require("./dv_text").schema;

var FEEDER_AUDIT = new mongoose.Schema({
  current_state: DV_CODED_TEXT,
  transition: DV_CODED_TEXT,
  careflow_step: DV_CODED_TEXT,
  reason: [DV_TEXT],
});

module.exports = mongoose.model("feeder_audit", FEEDER_AUDIT);
