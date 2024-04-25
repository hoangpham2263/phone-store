import express from "express";
import registerLoginController from "../controllers/registerLoginController";
import userController from "../controllers/userController";
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import roleController from "../controllers/roleController";
import productController from "../controllers/productController";
import categoriesController from "../controllers/categoriesController";
import heartController from "../controllers/heartController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const adminRoute = (app) => {
  // login and register
  router.post("/user/register", registerLoginController.registerUser);
  router.post("/user/login", registerLoginController.loginUser);
  router.post("/user/logout", registerLoginController.logoutUser);

  // Read JWT
  router.get("/user/jwt-token", registerLoginController.readJWT);

  // User
  router.get("/user/read", checkUserJWT, checkUserPermission, userController.readFunc);
  router.post("/user/create", checkUserJWT, checkUserPermission, userController.createFunc);
  router.put("/user/update", checkUserJWT, checkUserPermission, userController.updateFunc);
  router.delete("/user/delete", checkUserJWT, checkUserPermission, userController.deleteFunc);

  // Group
  router.get("/group/read", checkUserJWT, checkUserPermission, groupController.readFunc);
  router.post("/group/create", checkUserJWT, checkUserPermission, groupController.createFunc);
  router.put("/group/update", checkUserJWT, checkUserPermission, groupController.updateFunc);
  router.delete("/group/delete", checkUserJWT, checkUserPermission, groupController.deleteFunc);

  // Group Role
  router.get("/group-role/read", checkUserJWT, checkUserPermission, groupRoleController.readFunc);
  router.post(
    "/group-role/create",
    checkUserJWT,
    checkUserPermission,
    groupRoleController.createFunc
  );
  router.put(
    "/group-role/update",
    checkUserJWT,
    checkUserPermission,
    groupRoleController.updateFunc
  );
  router.delete(
    "/group-role/delete",
    checkUserJWT,
    checkUserPermission,
    groupRoleController.deleteFunc
  );

  // Role
  router.get("/role/read", checkUserJWT, checkUserPermission, roleController.readFunc);
  router.post("/role/create", checkUserJWT, checkUserPermission, roleController.createFunc);
  router.put("/role/update", checkUserJWT, checkUserPermission, roleController.updateFunc);
  router.delete("/role/delete", checkUserJWT, checkUserPermission, roleController.deleteFunc);

  // Product
  router.get("/product/read", productController.readFunc);
  router.get("/product/read/:slug", productController.readFuncDetail);
  router.post("/product/create", productController.createFunc);
  router.put("/product/update", productController.updateFunc);
  router.delete("/product/delete", productController.deleteFunc);

  // Category
  router.get("/category/read", categoriesController.readFunc);
  router.post("/category/create", categoriesController.createFunc);
  router.put("/category/update", categoriesController.updateFunc);
  router.delete("/category/delete", categoriesController.deleteFunc);

  // Heart
  router.get("/heart/read", checkUserJWT, checkUserPermission, heartController.readFunc);
  router.post("/heart/create", checkUserJWT, checkUserPermission, heartController.createFunc);
  // router.put("/heart/update",checkUserJWT, checkUserPermission, heartController.updateFunc);
  router.delete("/heart/delete", checkUserJWT, checkUserPermission, heartController.deleteFunc);

  return app.use("/api/v1", router);
};

export default adminRoute;
