import express from 'express';
import { authenticate } from '../../middlewares/index.js';
import { getCategories } from '../../controllers/index.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/', authenticate, getCategories);

export default categoriesRouter;
