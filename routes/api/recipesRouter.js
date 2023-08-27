import express from "express";
import { authenticate } from "../../middlewares/index.js";
import { getRecipes, deleteRecipes } from "../../controllers/recipes/index.js";

const recipesRouter = express.Router();

recipesRouter.get("/own", authenticate, getRecipes);

recipesRouter.delete("/own/:id", authenticate, deleteRecipes);

export default recipesRouter;
