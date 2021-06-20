var express = require("express");
var router = express.Router();
var Composition = require("../controllers/compositions");
var Versioned = require("../controllers/versioned_compositions");
/* GET home page. */
router.get("/ehr", function (req, res, next) {
  Versioned.ehr()
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

/* get compositions from one ehr */
router.get("/ehr/:idEHR/composition", function (req, res, next) {
  Composition.list(req.params.idEHR)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

/* get Versioned_compositions from one ehr */
router.get("/ehr/:idEHR/versioned", function (req, res, next) {
  Versioned.list(req.params.idEHR)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

/* get compositions from one ehr */
router.get("/ehr/:idEHR/composition/:versioned_object_uid", function (
  req,
  res,
  next
) {
  Composition.getComposition(req.params.idEHR, req.params.versioned_object_uid)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

/* get Versioned_compositions from one ehr */
router.get("/ehr/:idEHR/versioned/:versioned_object_uid", function (
  req,
  res,
  next
) {
  Versioned.lookUpID(req.params.versioned_object_uid, req.params.idEHR)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

router.get("/ehr/:idEHR/versioned/:versioned_object_uid/composition", function (
  req,
  res,
  next
) {
  Composition.lookUpID(req.params.versioned_object_uid)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

router.post(
  "/ehr/:idEHR/versioned/:versioned_object_uid/composition/update",
  function (req, res, next) {
    Composition.updateComposition(req.body)
      .then((dados) => {
        res.jsonp(dados);
      })
      .catch((e) => console.log(e));
  }
);

router.post(
  "/ehr/:idEHR/versioned/:versioned_object_uid/composition/add",
  function (req, res, next) {
    Composition.createComposition(req.params.versioned_object_uid, req.body)
      .then((dados) => {
        res.jsonp(dados);
      })
      .catch((e) => console.log(e));
  }
);

router.post("/ehr/:idEHR/versioned/add", function (req, res, next) {
  Versioned.addVC(req.body)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

router.delete("/ehr/:idEHR/versioned/:idV/composition/:idC", function (
  req,
  res,
  next
) {
  var id = req.params.idV + "::MyMedEHR::" + req.params.idC;
  Composition.deleteC(id)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

router.delete("/ehr/:idEHR/versioned/:idV", function (req, res, next) {
  Versioned.deleteVC(req.params.idV)
    .then((dados) => {
      res.jsonp(dados);
    })
    .catch((e) => console.log(e));
});

module.exports = router;
