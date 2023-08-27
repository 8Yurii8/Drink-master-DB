import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { getRecipeById } from "../../controllers/index.js";

const recipesRouter = express.Router();

recipesRouter.get("/:id", /*authenticate,*/ isValidId, getRecipeById);

export default recipesRouter;
