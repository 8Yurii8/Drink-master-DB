import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { getRecipesById } from "../../controllers/index.js";
const recipesRouter = express.Router();

recipesRouter.get("/:id", authenticate, isValidId, getRecipesById);
export default recipesRouter;
