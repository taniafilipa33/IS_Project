var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/IS_TP";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const cors = require("cors");
var db = mongoose.connection;
db.on("error", function () {
  console.log("Error connecting MongoDB...");
});
db.once("open", function () {
  console.log("Connected to MongoDB...");
});

var indexRouter = require("./routes/index");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);

module.exports = app;
