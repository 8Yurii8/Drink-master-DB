import express from 'express';
import { authenticate } from '../../middlewares/index.js';
import { getIngredients } from '../../controllers/index.js';

const ingredientsRouter = express.Router();

ingredientsRouter.get('/', authenticate, getIngredients);

export default ingredientsRouter;
