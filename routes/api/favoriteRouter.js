import express from "express";
import { authenticate } from "../../middlewares/index.js";
import { getFavoriteDrinks } from "controllers/index.js";

const favoriteRouter = express.Router();

favoriteRouter.get("/favorite", authenticate, getFavoriteDrinks);
