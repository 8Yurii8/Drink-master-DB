import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import {
  getRecipes,
  deleteRecipes,
  getRecipeById,
} from "../../controllers/index.js";

const recipesRouter = express.Router();

recipesRouter.get("/own", authenticate, getRecipes);

recipesRouter.delete("/own/:id", authenticate, deleteRecipes);

recipesRouter.get("/:id", authenticate, isValidId, getRecipeById);

export default recipesRouter;
