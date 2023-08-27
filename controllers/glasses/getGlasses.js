import { Glasses } from '../../models/index.js';
import { ctrlWrapper } from '../../helpers/index.js';

const getGlasses = async (req, res) => {
    const result = await Glasses.find({});
    res.json(result);
};

export default ctrlWrapper(getGlasses);
