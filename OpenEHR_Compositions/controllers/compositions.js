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
  var t = myobj.uid.value.split("::")[0];
  console.log("t==", t);
  Composition.count({ "uid.value": { $regex: t } })
    .exec()
    .then((v) => {
      delete myobj._id;
      var version = v + 1;
      myobj.uid.value = t + "::MyMedEHR::" + version;
      myobj.archetype_details.archetype_id =
        "openEHR-EHR-COMPOSITION.encounter.v" + version;
      myobj.archetype_node_id = "openEHR-EHR-COMPOSITION.encounter.v" + version;
      var c = new Composition(myobj);
      return c.save();
    });
};

module.exports.createComposition = async function (idV, myobj) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  Composition.count({ "uid.value": { $regex: idV } })
    .exec()
    .then(async (v) => {
      var version = v + 1;
      myobj.uid.value = idV + "::MyMedEHR::" + version;
      myobj.archetype_details.archetype_id =
        "openEHR-EHR-COMPOSITION.encounter.v" + version;
      myobj.archetype_node_id = "openEHR-EHR-COMPOSITION.encounter.v" + version;
      myobj.context.startTime.value = dateTime;
      const u = myobj.content.map((y) => {
        var k = y.archetype_node_id;
        y.archetype_node_id = k + ".v" + version;
        y.archetype_details.archetype_id.value = k + ".v" + version;
        y.data.origin.value = dateTime;
        y.data.events[0].time.value = dateTime;
      });
      await Promise.resolve(u);
      console.log(myobj);
      var c = new Composition(myobj);
      return c.save();
    });
};

module.exports.deleteC = async function (id) {
  return Composition.remove({ "uid.value": id }).exec();
};
