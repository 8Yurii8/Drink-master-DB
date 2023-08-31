import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import {
  addOwnRecipe,
  getOwnRecipes,
  deleteOwnRecipes,
  getOwnRecipeById,
} from "../../controllers/index.js";

const ownRouter = express.Router();

ownRouter.post("/", authenticate, addOwnRecipe);

ownRouter.get("/", authenticate, getOwnRecipes);

ownRouter.delete("/:id", authenticate, deleteOwnRecipes);

ownRouter.get("/:id", authenticate, isValidId, getOwnRecipeById);

export default ownRouter;
