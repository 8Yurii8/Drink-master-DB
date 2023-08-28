import express from "express";
import { authenticate, isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { emailSchema } from "../../schemas/index.js";
import ctrl from "../../controllers/subscripeController/index.js";

const subscribeRouter = express.Router();

subscribeRouter.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(emailSchema),
  ctrl.subscribeController
);

export default subscribeRouter;
