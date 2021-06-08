// Composition controller

var Composition = require("../models/composition");

// Retorna lista de utilizadores
module.exports.list = function () {
  return Composition.find().exec();
};

// Retorna um Composition
module.exports.lookUp = function (u) {
  return Composition.findOne(u).exec();
};

// Retorna um Composition por id
module.exports.lookUpID = function (u) {
  return Composition.find( { "uid.value" : { $regex : u}}).exec();
};
