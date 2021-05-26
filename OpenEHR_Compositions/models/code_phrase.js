var mongoose = require("mongoose");

var CODE_PHRASE = new mongoose.Schema({
  _id: String,
  terminology_id: String,
  code_string: String,
  preferred_term: String,
});

module.exports = mongoose.model("code_phrase", CODE_PHRASE);
