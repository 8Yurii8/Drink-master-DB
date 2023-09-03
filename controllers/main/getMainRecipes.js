import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getMainRecipes = async (req, res) => {
  const uniqueCategories = [
    "Cocktail",
    "Ordinary Drink",
    "Shake",
    "Other/Unknown",
  ];

  function flattenArray(twoDimensionalArray) {
    const flattenedArray = [];
    for (let i = 0; i < twoDimensionalArray.length; i++) {
      for (let j = 0; j < twoDimensionalArray[i].length; j++) {
        flattenedArray.push(twoDimensionalArray[i][j]);
      }
    }
    return flattenedArray;
  }

  const resultPromises = uniqueCategories.map(async (category) => {
    const categoryRecipes = await Recipes.find({ category })
         .sort({ createdAt: -1 })
      .limit(3);
    return categoryRecipes;
  });
  const result = flattenArray(await Promise.all(resultPromises));
  res.json(result);
};

export default ctrlWrapper(getMainRecipes);
