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

const ownRouter = express.Router();

ownRouter.post(
    '/',
    authenticate,
    uploadImage.single('drinkThumb'),
    addOwnRecipe
);

ownRouter.get('/', authenticate, getOwnRecipes);

ownRouter.delete('/:id', authenticate, isValidId, deleteOwnRecipes);

export default ownRouter;
