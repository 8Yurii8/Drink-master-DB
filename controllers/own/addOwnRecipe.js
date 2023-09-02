import fs from 'fs/promises';
import { cloudinary } from '../../cloudinary/index.js';
import { Recipes } from '../../models/index.js';
import { HttpError, ctrlWrapper } from '../../helpers/index.js';

const addOwnRecipe = async (req, res) => {
    const { _id: owner } = req.user;

    if (!req.file) throw HttpError(404, 'No image provided');

    const { path: tempFilePath, originalname } = req.file;

    const cloudinaryOptions = {
        folder: 'recipes',
        allowed_formats: ['jpg', 'jpeg', 'png', 'bmp'],
        public_id: `${originalname}_${owner}`,
        transformation: { width: 342, height: 360, crop: 'fill' },
        overwrite: true,
        secure: true,
    };

    const { secure_url: cloudinaryImageURL } = await cloudinary.uploader.upload(
        tempFilePath,
        cloudinaryOptions
    );

    await fs.unlink(tempFilePath);

    const newRecipe = {
        ...req.body,
        ingredients: JSON.parse(req.body.ingredients),
        imageThumb: cloudinaryImageURL,
        owner,
    };

    const result = await Recipes.create(newRecipe);

    res.status(201).json(result);
};

export default ctrlWrapper(addOwnRecipe);
