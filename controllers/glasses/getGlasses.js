import { Glasses } from '../../models/index.js';
import { ctrlWrapper } from '../../decorators/index.js';

const getGlasses = async (req, res) => {
    const result = await Glasses.find({});
    res.json(result);
};

export default ctrlWrapper(getGlasses);
