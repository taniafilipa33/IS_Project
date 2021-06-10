// Versioned controller

var Versioned = require("../models/versioned_composition");

// Retorna lista de Versioned
module.exports.list = function (idEHR) {
  return Versioned.find(
    {
      $and: [
        {
          "owner_id.type": "EHR",
          "owner_id.id.value": idEHR,
        },
      ],
    },
    {}
  ).exec();
};

// Retorna um Versioned
module.exports.lookUp = function (u) {
  return Versioned.findOne(u).exec();
};

module.exports.ehr = function () {
  return Versioned.find({},{}).exec();
};

// Retorna um Versioned por id
module.exports.lookUpID = function (u, idEhr) {
  return Versioned.find(
    { $and: [{ "uid.value": u, "owner_id.id.value": idEhr }] },
    {}
  ).exec();
};
