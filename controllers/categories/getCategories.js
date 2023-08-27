import { Categories } from '../../models/index.js';
import { ctrlWrapper } from '../../decorators/index.js';

const getCategories = async (req, res) => {
    const result = await Categories.find({});
    res.json(result);
};

export default ctrlWrapper(getCategories);
