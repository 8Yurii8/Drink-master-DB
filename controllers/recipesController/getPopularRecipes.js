import { Recipes } from '../../models/index.js';
import { ctrlWrapper } from '../../helpers/index.js';

const getPopularRecipes = async (req, res) => {
    const popularRecipes = await Recipes.aggregate([
        { $unwind: '$favorites' },
        { $group: { _id: '$_id', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 4 },
        {
            $lookup: {
                from: 'recipes',
                localField: '_id',
                foreignField: '_id',
                as: 'recipe',
            },
        },
    ]);
    const recipeIds = popularRecipes.map(recipe => recipe.recipe[0]._id);
    const recipes = await Recipes.find({ _id: { $in: recipeIds } });
    res.json(recipes);
};

export default ctrlWrapper(getPopularRecipes);
