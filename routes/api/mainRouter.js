import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { getMainRecipes } from "../../controllers/main/index.js";

const mainRouter = express.Router();

mainRouter.get("/", authenticate, getMainRecipes);

export default mainRouter;
