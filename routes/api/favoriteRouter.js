import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { addToFavorite, deleteFromFavorites } from "../../controllers/favorite/index.js";

import getFavoriteDrinks from "../../controllers/favorite/getFavorite.js";

const favoriteRouter = express.Router();

favoriteRouter.get("/", authenticate, getFavoriteDrinks);

favoriteRouter.post("/:id", authenticate, isValidId, addToFavorite);

favoriteRouter.delete("/:id", authenticate, isValidId, deleteFromFavorites);

export default favoriteRouter;
