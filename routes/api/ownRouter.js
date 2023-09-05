import express from 'express';
import {
    authenticate,
    isValidId,
    uploadImage,
} from '../../middlewares/index.js';
import {
    addOwnRecipe,
    getOwnRecipes,
    deleteOwnRecipes,
} from '../../controllers/index.js';
import { addOwnRecipeSchema } from '../../schemas/index.js';
import { validateBody } from '../../decorators/index.js';
import { isEmptyBody } from '../../middlewares/index.js';

const ownRouter = express.Router();

ownRouter.post(
    '/',
    authenticate,
    uploadImage.single('drinkThumb'),
    isEmptyBody,
    validateBody(addOwnRecipeSchema),
    addOwnRecipe
);

ownRouter.get('/', authenticate, getOwnRecipes);

ownRouter.delete('/:id', authenticate, isValidId, deleteOwnRecipes);

export default ownRouter;
