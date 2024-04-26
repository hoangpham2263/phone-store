import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import roleController from "../controllers/roleController";
import productController from "../controllers/productController";
import categoriesController from "../controllers/categoriesController";
import cartController from "../controllers/cartController";

const router = express.Router();

const adminRoute = (app) => {

  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  router.post("/user/logout", registerLoginController.logoutUser);

  // Read JWT
  router.get("/user/jwt-token", registerLoginController.readJWT);

  // User
  router.get("/user/read", userController.readFunc);

  // Group
  router.get("/group/read", groupController.readFunc);

  // Group Role
  router.get("/group-role/read", groupRoleController.readFunc);

  // Role
  router.get("/role/read", roleController.readFunc);

  // Product
  router.get("/product/read", productController.readFunc);
  router.get("/product/read/:slug", productController.readFuncDetail);

  // Category
  router.get("/category/read", categoriesController.readFunc);

  // Cart
  router.delete("/cart/delete", cartController.deleteFunc);
  router.get("/cart/read", cartController.readFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
