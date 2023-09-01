import express from "express";
import { authenticate } from "../../middlewares/index.js";
import { searchController } from "../../controllers/index.js";
import { validateBody } from "../../decorators/index.js";
import { searchShemas } from "../../schemas/index.js";
const searchRouter = express.Router();

searchRouter.get(
  "/",
  authenticate,
  validateBody(searchShemas),
  searchController
);
console.log(
  searchRouter.get(
    "/",
    authenticate,
    validateBody(searchShemas),
    searchController
  )
);
export default searchRouter;
