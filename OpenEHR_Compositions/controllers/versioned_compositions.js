// Versioned controller

var Versioned = require("../models/versioned_composition");
var Composition = require("../models/composition");

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
  return Versioned.distinct("owner_id.id.value").exec();
};

// Retorna um Versioned por id
module.exports.lookUpID = function (u, idEhr) {
  return Versioned.find(
    { $and: [{ "uid.value": u, "owner_id.id.value": idEhr }] },
    {}
  ).exec();
};

module.exports.deleteVC = async function(id){
  const p = Composition.remove(
    { "uid.value": {$regex: id} }
  ).exec();
  await Promise.resolve(p)
  return Versioned.remove(
    { "uid.value": id }
  ).exec();
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports.addVC = function(myobj){
  console.log(myobj)
  let today = new Date()
  myobj.uid.value = uuidv4().toString()
  myobj.timeCreated = today.toString()
  var v = new Versioned(myobj)
  return v.save();
}
