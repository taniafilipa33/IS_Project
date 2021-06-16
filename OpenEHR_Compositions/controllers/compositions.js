// Composition controller

var Composition = require("../models/composition");
var mongoose = require("mongoose");

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
  return Composition.find({ "uid.value": { $regex: u } }).exec();
};



module.exports.updateComposition = async function (myobj) {
  var t = myobj.uid.value.split('::')[0]
  console.log("t==", t)
  Composition.count({'uid.value': {$regex: t} }).exec().then((v)=>{
    delete myobj._id
    var version = v + 1
    myobj.uid.value = t + "::MyMedEHR::" + version
    myobj.archetype_details.archetype_id = "openEHR-EHR-COMPOSITION.encounter.v" + version
    myobj.archetype_node_id = "openEHR-EHR-COMPOSITION.encounter.v" + version
    var c = new Composition(myobj)
    return c.save();
  });
  
}
