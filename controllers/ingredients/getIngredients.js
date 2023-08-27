import { Ingredients } from '../../models/index.js';
import { ctrlWrapper } from '../../helpers/index.js';

const getIngredients = async (req, res) => {
    const result = await Ingredients.find({});
    res.json(result);
};

export default ctrlWrapper(getIngredients);
