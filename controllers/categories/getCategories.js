import { Categories } from '../../models/index.js';
import { ctrlWrapper } from '../../helpers/index.js';

const getCategories = async (req, res) => {
    const result = await Categories.find({}).sort({ title: 'asc' });
    res.json(result);
};

export default ctrlWrapper(getCategories);
