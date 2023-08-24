import express from "express";
import validateBody from "../../decorators/validateBody.js";
import userShemas from "../../schemas/userShema.js";
import authController from "../../controllers/authController.js";
import { authenticate } from "../../middlewares/index.js";
const authRoter = express.Router();
authRoter.post(
  "/register",
  validateBody(userShemas.userRegisterShema),
  authController.register
);
authRoter.post(
  "/login",
  validateBody(userShemas.userRegisterShema),
  authController.login
);
authRoter.get("/curren", authenticate, authController.getCurren);
authRoter.post("/signout", authenticate, authController.signout);
authRoter.patch("/", authenticate, authController.updateSubscription);
export default authRoter;
