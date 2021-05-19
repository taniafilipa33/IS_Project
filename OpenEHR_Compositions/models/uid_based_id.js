var mongoose = require("mongoose");

var UID_BASED_ID = new mongoose.Schema({
  object_id = String,
});

module.exports = mongoose.model("uid_based_id", UID_BASED_ID);
