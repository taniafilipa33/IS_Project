var express = require("express");
var router = express.Router();
var Composition = require("../controllers/compositions");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.jsonp({ message: "Hello Worldzito!" });
});

router.get("/compositions", function (req, res, next) {
  Composition.list()
    .then((dados) => {
      res.json(dados);
    })
    .catch((e) => console.log(e));
});

module.exports = router;
