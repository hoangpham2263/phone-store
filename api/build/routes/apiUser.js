"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _registerLoginController = _interopRequireDefault(require("../controllers/registerLoginController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _groupController = _interopRequireDefault(require("../controllers/groupController"));
var _groupRoleController = _interopRequireDefault(require("../controllers/groupRoleController"));
var _roleController = _interopRequireDefault(require("../controllers/roleController"));
var _productController = _interopRequireDefault(require("../controllers/productController"));
var _categoriesController = _interopRequireDefault(require("../controllers/categoriesController"));
var _brandController = _interopRequireDefault(require("../controllers/brandController"));
var _citiesController = _interopRequireDefault(require("../controllers/citiesController"));
var _districtsController = _interopRequireDefault(require("../controllers/districtsController"));
var _cartController = _interopRequireDefault(require("../controllers/cartController"));
var _orderController = _interopRequireDefault(require("../controllers/orderController"));
var _JWTAction = require("../middleware/JWTAction");
var _SendMail = _interopRequireDefault(require("../utility/SendMail"));
var _SendMailContact = _interopRequireDefault(require("../utility/SendMailContact"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var adminRoute = function adminRoute(app) {
  var authMiddlewares = [_JWTAction.checkUserJWT, _JWTAction.checkUserPermission];

  // login and register
  router.post("/user/register", _registerLoginController["default"].registerUser);
  router.post("/user/login", _registerLoginController["default"].loginUser);
  router.post("/user/logout", _registerLoginController["default"].logoutUser);

  // Read JWT
  router.get("/user/jwt-token", _registerLoginController["default"].readJWT);
  router.get("/user/read", _userController["default"].readFunc);
  router.put("/user/update", authMiddlewares, _userController["default"].updateFunc);
  router.get("/group/read", _groupController["default"].readFunc);
  router.get("/group-role/read", _groupRoleController["default"].readFunc);
  router.get("/role/read", _roleController["default"].readFunc);
  router.get("/product/read/:slug", _productController["default"].readFuncDetail);
  router.get("/product/read", _productController["default"].readFunc);
  router.get("/categories/read", _categoriesController["default"].readFunc);
  router.get("/brand/read", _brandController["default"].readFunc);
  router.get("/cities/read", _citiesController["default"].readFunc);
  router.get("/districts/read", _districtsController["default"].readFunc);

  // CRUD cart need login
  router.get("/cart/read", _cartController["default"].readFunc);
  router.get("/order/read-cart", _cartController["default"].readFuncCartOrderId);
  router.post("/cart/add", _cartController["default"].addFunc);
  router.post("/cart/create", _cartController["default"].createFunc);
  router.put("/cart/update", _cartController["default"].updateFunc);
  router["delete"]("/cart/delete", _cartController["default"].deleteFunc);

  // CRUD order need login
  router.get("/order/read", _orderController["default"].readFunc);
  router.post("/order/create", _orderController["default"].createFunc);
  router["delete"]("/order/delete", _orderController["default"].deleteFunc);

  // Send Mail 
  router.post("/send-mail", _SendMail["default"]);
  router.post("/send-mail-contact", _SendMailContact["default"]);
  return app.use("/api/v1", router);
};
var _default = exports["default"] = adminRoute;