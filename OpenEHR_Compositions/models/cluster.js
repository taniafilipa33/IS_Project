var mongoose = require("mongoose");
var LOCATABLE = require("./locatable").schema;
var CLUSTER = require("./cluster").schema;
var ELEMENT = require("./element").schema;

var CLUSTER = new mongoose.Schema({
  locatable: LOCATABLE,
  items: [CLUSTER | ELEMENT],
});

module.exports = mongoose.model("cluster", CLUSTER, "cluster");
