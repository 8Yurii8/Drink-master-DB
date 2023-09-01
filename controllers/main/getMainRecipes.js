import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getMainRecipes = async (req, res) => {
  const uniqueCategories = [
    "Cocktail",
    "Ordinary Drink",
    "Shake",
    "Other/Unknown",
  ];

  const resultPromises = uniqueCategories.map(async (category) => {
    const categoryRecipes = await Recipes.find({ category })
      //   .sort({ _id: -1 })
      .limit(3);
    return categoryRecipes;
  });
  const result = await Promise.all(resultPromises);
  res.json(result);
};

export default ctrlWrapper(getMainRecipes);
