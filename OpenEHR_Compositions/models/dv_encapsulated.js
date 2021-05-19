var mongoose = require("mongoose");
var CODE_PHRASE = require("./code_phrase");

var DV_ENCAPSULATED = new mongoose.Schema({
    data_value: String,
    charset: CODE_PHRASE,
    language: CODE_PHRASE,
});

module.exports = mongoose.model("dv_encapsulated", DV_ENCAPSULATED);
