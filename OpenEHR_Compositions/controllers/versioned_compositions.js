// Versioned controller

var Versioned = require("../models/versioned_composition");

// Retorna lista de Versioned
module.exports.list = function (idEHR) {
  return Versioned.find(
    {
      $and: [
        {
          "owner_id.type": "EHR",
          "owner_id.id.value": "7d44b88c-4199-4bad-97dc-d78268e01398",
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
  return Versioned.find(
    { "owner_id.type": "EHR" },
    { "owner_id.id.value": 1 }
  ).exec();
};

// Retorna um Versioned por id
module.exports.lookUpID = function (u) {
  return Versioned.findOne({ _id: u }).exec();
};
