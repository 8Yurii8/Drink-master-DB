import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { updateFavoriteStatus } from "../../controllers/favorite/index.js";

import getFavoriteDrinks from "../../controllers/favorite/getFavorite.js";

const favoriteRouter = express.Router();

favoriteRouter.get("/", authenticate, getFavoriteDrinks);

favoriteRouter.patch("/:id", authenticate, isValidId, updateFavoriteStatus);

export default favoriteRouter;
