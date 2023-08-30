import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { getOwnRecipes, deleteOwnRecipes } from "../../controllers/index.js";

const ownRouter = express.Router();

ownRouter.get("/", authenticate, getOwnRecipes);

ownRouter.delete("/:id", authenticate, isValidId, deleteOwnRecipes);

export default ownRouter;
