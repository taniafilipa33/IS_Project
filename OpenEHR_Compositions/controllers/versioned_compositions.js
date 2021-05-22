// Versioned controller

var Versioned = require("../models/versioned_composition");

// Retorna lista de Versioned
module.exports.list = function () {
  return Versioned.find().exec();
};

// Retorna um Versioned
module.exports.lookUp = function (u) {
  return Versioned.findOne(u).exec();
};

// Retorna um Versioned por id
module.exports.lookUpID = function (u) {
  return Versioned.findOne({ _id: u }).exec();
};
