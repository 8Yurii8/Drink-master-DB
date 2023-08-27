import express from 'express';
import { authenticate } from '../../middlewares/index.js';
import { getGlasses } from '../../controllers/index.js';

const glassesRouter = express.Router();

glassesRouter.get('/', authenticate, getGlasses);

export default glassesRouter;
