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
var _cartController = _interopRequireDefault(require("../controllers/cartController"));
var _JWTAction = require("../middleware/JWTAction");
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

  // User
  router.get("/user/read", authMiddlewares, _userController["default"].readFunc);
  router.post("/user/create", authMiddlewares, _userController["default"].createFunc);
  router.put("/user/update", authMiddlewares, _userController["default"].updateFunc);
  router["delete"]("/user/delete", authMiddlewares, _userController["default"].deleteFunc);

  // Group
  router.get("/group/read", authMiddlewares, _groupController["default"].readFunc);
  router.post("/group/create", authMiddlewares, _groupController["default"].createFunc);
  router.put("/group/update", authMiddlewares, _groupController["default"].updateFunc);
  router["delete"]("/group/delete", authMiddlewares, _groupController["default"].deleteFunc);

  // Group Role
  router.get("/group-role/read", authMiddlewares, _groupRoleController["default"].readFunc);
  router.post("/group-role/create", authMiddlewares, _groupRoleController["default"].createFunc);
  router.put("/group-role/update", authMiddlewares, _groupRoleController["default"].updateFunc);
  router["delete"]("/group-role/delete", authMiddlewares, _groupRoleController["default"].deleteFunc);

  // Role
  router.get("/role/read", authMiddlewares, _roleController["default"].readFunc);
  router.post("/role/create", authMiddlewares, _roleController["default"].createFunc);
  router.put("/role/update", authMiddlewares, _roleController["default"].updateFunc);
  router["delete"]("/role/delete", authMiddlewares, _roleController["default"].deleteFunc);

  // Product
  router.get("/product/read", authMiddlewares, _productController["default"].readFunc);
  router.get("/product/read/:slug", authMiddlewares, _productController["default"].readFuncDetail);
  router.post("/product/create", authMiddlewares, _productController["default"].createFunc);
  router.put("/product/update", authMiddlewares, _productController["default"].updateFunc);
  router["delete"]("/product/delete", authMiddlewares, _productController["default"].deleteFunc);

  // Category
  router.get("/categories/read", authMiddlewares, _categoriesController["default"].readFunc);
  router.post("/categories/create", authMiddlewares, _categoriesController["default"].createFunc);
  router.put("/categories/update", authMiddlewares, _categoriesController["default"].updateFunc);
  router["delete"]("/categories/delete", authMiddlewares, _categoriesController["default"].deleteFunc);

  // Brand
  router.get("/brand/read", authMiddlewares, _brandController["default"].readFunc);
  router.post("/brand/create", authMiddlewares, _brandController["default"].createFunc);
  router.put("/brand/update", authMiddlewares, _brandController["default"].updateFunc);
  router["delete"]("/brand/delete", authMiddlewares, _brandController["default"].deleteFunc);
  return app.use("/api/v1/admin", router);
};
var _default = exports["default"] = adminRoute;