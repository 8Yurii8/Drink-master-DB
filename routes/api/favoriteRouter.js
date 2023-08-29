import express from "express";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { updateFavoriteStatus } from "../../controllers/favorite/index.js";

const favoriteRouter = express.Router();

favoriteRouter.patch("/:id", authenticate, isValidId, updateFavoriteStatus);

export default favoriteRouter;
