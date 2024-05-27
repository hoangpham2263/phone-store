"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var createJWT = function createJWT(payload) {
  var key = process.env.JWT_SECRET;
  var token = null;
  try {
    token = _jsonwebtoken["default"].sign(payload, key);
  } catch (error) {
    console.log(error);
  }
  return token;
};
var verifyToken = function verifyToken(token) {
  var key = process.env.JWT_SECRET;
  var decoded = null;
  try {
    decoded = _jsonwebtoken["default"].verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};
var checkUserJWT = function checkUserJWT(req, res, next) {
  var cookies = req.cookies;
  if (cookies && cookies.jwt) {
    var token = cookies.jwt;
    var decoded = verifyToken(token);
    if (decoded) {
      var data = decoded;
      req.user = data;
      next();
    } else {
      return res.status(401).json({
        EC: -1,
        DT: [],
        EM: "Not authenticated the user"
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: [],
      EM: "Not authenticated the user"
    });
  }
};
var checkUserPermission = function checkUserPermission(req, res, next) {
  if (req.user) {
    var email = req.user.email;
    var roles = req.user.groupWithRoles.Roles;
    var currentUrl = req.path;
    if (!roles || roles.length === 0) {
      return res.status(403).json({
        EC: -1,
        DT: [],
        EM: "You don't permission to access this resource..."
      });
    }
    var canAccess = roles.some(function (item) {
      return item.url === currentUrl;
    });
    if (canAccess === true) {
      next();
    } else {
      return res.status(403).json({
        EC: -1,
        DT: [],
        EM: "You don't permission to access this resource..."
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: [],
      EM: "Not authenticated the user"
    });
  }
};
module.exports = {
  createJWT: createJWT,
  verifyToken: verifyToken,
  checkUserJWT: checkUserJWT,
  checkUserPermission: checkUserPermission
};