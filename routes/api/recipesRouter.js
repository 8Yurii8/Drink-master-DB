import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { getRecipeById, getPopularRecipes } from "../../controllers/index.js";
const recipesRouter = express.Router();

// !WARNING: Please, do not change the order of code lines - '/popular' route must be first
recipesRouter.get('/popular', authenticate, getPopularRecipes);
recipesRouter.get("/:id", authenticate, isValidId, getRecipeById);

export default recipesRouter;
