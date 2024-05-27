"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _apiAdmin = _interopRequireDefault(require("./routes/apiAdmin"));
var _apiUser = _interopRequireDefault(require("./routes/apiUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 7000;
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// parse application/x-www-form-urlencoded
app.use(_bodyParser["default"].urlencoded({
  extended: false,
  limit: "50mb"
}));
// parse application/json
app.use(_bodyParser["default"].json({
  limit: "50mb"
}));

// config
app.use((0, _cookieParser["default"])());

// routes
(0, _apiAdmin["default"])(app);
(0, _apiUser["default"])(app);
app.listen(PORT, function () {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});