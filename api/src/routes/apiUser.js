import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import roleController from "../controllers/roleController";
import productController from "../controllers/productController";
import categoriesController from "../controllers/categoriesController";

const router = express.Router();

const adminRoute = (app) => {

  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  router.post("/user/logout", registerLoginController.logoutUser);

  // Read JWT
  router.get("/user/jwt-token", registerLoginController.readJWT);
  router.get("/user/read", userController.readFunc);
  router.get("/group/read", groupController.readFunc);
  router.get("/group-role/read", groupRoleController.readFunc);
  router.get("/role/read", roleController.readFunc);
  router.get("/product/read", productController.readFunc);
  router.get("/product/read/:slug", productController.readFuncDetail);
  router.get("/category/read", categoriesController.readFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
