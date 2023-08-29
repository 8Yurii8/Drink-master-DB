import express from "express";
import { authenticate } from "../../middlewares/index.js";
import getFavoriteDrinks from "../../controllers/favorite/getFavorite.js";

const favoriteRouter = express.Router();

// favoriteRouter.get("/:userId", authenticate, getFavoriteDrinks);
favoriteRouter.get("/:userId", getFavoriteDrinks);

export default favoriteRouter;
