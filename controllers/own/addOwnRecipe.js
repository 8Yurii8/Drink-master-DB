import { Recipes } from '../../models/index.js';
import { ctrlWrapper } from '../../helpers/index.js';

const addOwnRecipe = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Recipes.create({ ...req.body, owner });
    res.status(201).json(result);
};

export default ctrlWrapper(addOwnRecipe);
