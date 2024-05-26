import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import roleController from "../controllers/roleController";
import productController from "../controllers/productController";
import categoriesController from "../controllers/categoriesController";
import brandController from "../controllers/brandController";
import cartController from "../controllers/cartController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const adminRoute = (app) => {
  const authMiddlewares = [checkUserJWT, checkUserPermission]

  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  router.post("/user/logout", registerLoginController.logoutUser);

  // Read JWT
  router.get("/user/jwt-token", registerLoginController.readJWT);

  // User
  router.get("/user/read", authMiddlewares, userController.readFunc);
  router.post("/user/create", authMiddlewares, userController.createFunc);
  router.put("/user/update", authMiddlewares, userController.updateFunc);
  router.delete("/user/delete", authMiddlewares, userController.deleteFunc);

  // Group
  router.get("/group/read", authMiddlewares, groupController.readFunc);
  router.post("/group/create", authMiddlewares, groupController.createFunc);
  router.put("/group/update", authMiddlewares, groupController.updateFunc);
  router.delete("/group/delete", authMiddlewares, groupController.deleteFunc);

  // Group Role
  router.get("/group-role/read", authMiddlewares, groupRoleController.readFunc);
  router.post("/group-role/create", authMiddlewares, groupRoleController.createFunc);
  router.put("/group-role/update", authMiddlewares, groupRoleController.updateFunc);
  router.delete("/group-role/delete", authMiddlewares, groupRoleController.deleteFunc);

  // Role
  router.get("/role/read", authMiddlewares, roleController.readFunc);
  router.post("/role/create", authMiddlewares, roleController.createFunc);
  router.put("/role/update", authMiddlewares, roleController.updateFunc);
  router.delete("/role/delete", authMiddlewares, roleController.deleteFunc);

  // Product
  router.get("/product/read", authMiddlewares, productController.readFunc);
  router.get("/product/read/:slug", authMiddlewares, productController.readFuncDetail);
  router.post("/product/create", authMiddlewares, productController.createFunc);
  router.put("/product/update", authMiddlewares, productController.updateFunc);
  router.delete("/product/delete", authMiddlewares, productController.deleteFunc);

  // Category
  router.get("/categories/read", authMiddlewares, categoriesController.readFunc);
  router.post("/categories/create", authMiddlewares, categoriesController.createFunc);
  router.put("/categories/update", authMiddlewares, categoriesController.updateFunc);
  router.delete("/categories/delete", authMiddlewares, categoriesController.deleteFunc);

  // Brand
  router.get("/brand/read", authMiddlewares, brandController.readFunc);
  router.post("/brand/create", authMiddlewares, brandController.createFunc);
  router.put("/brand/update", authMiddlewares, brandController.updateFunc);
  router.delete("/brand/delete", authMiddlewares, brandController.deleteFunc);

  return app.use("/api/v1/admin", router);
};

export default adminRoute;
