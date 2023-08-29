import express from "express";
import { authenticate } from "../../middlewares/index.js";
import { searchController } from "../../controllers/index.js";

const searchRouter = express.Router();

searchRouter.get("/", authenticate, searchController);

export default searchRouter;
