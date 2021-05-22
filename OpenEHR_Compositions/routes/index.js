var express = require("express");
var router = express.Router();
var Composition = require("../controllers/compositions");
var Versioned = require("../controllers/versioned_compositions");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.jsonp({ message: "Hello Worldzito!" });
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
router.get(
  "/ehr/:idEHR/composition/:versioned_object_uid",
  function (req, res, next) {
    Composition.getComposition(
      req.params.idEHR,
      req.params.versioned_object_uid
    )
      .then((dados) => {
        res.jsonp(dados);
      })
      .catch((e) => console.log(e));
  }
);

/* get Versioned_compositions from one ehr */
router.get(
  "/ehr/:idEHR/versioned/:versioned_object_uid",
  function (req, res, next) {
    Versioned.getVersioned(req.params.idEHR, req.params.versioned_object_uid)
      .then((dados) => {
        res.jsonp(dados);
      })
      .catch((e) => console.log(e));
  }
);
module.exports = router;
