import express from "express";
import {
  signIn,
  signOut,
  signUp,
} from "../../controllers/authController/index.js";
import { userSchema } from "../../schemas/index.js";
import { validateBody } from "../../decorators/index.js";
import { authenticate } from "../../middlewares/index.js";

const authRoute = express.Router();

authRoute.post("/signup", validateBody(userSchema.userSignUpSchema), signUp);

authRoute.post("/signin", validateBody(userSchema.userSignInSchema), signIn);

authRoute.post("/signout", authenticate, signOut);

export default authRoute;
