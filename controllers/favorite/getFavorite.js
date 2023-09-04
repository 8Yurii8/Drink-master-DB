import { ctrlWrapper } from "../../helpers/index.js";
import Recipes from "../../models/recipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { id } = req.user;

  const allRecipe = await Recipes.find({
    "favorites.userId": id,
  }).sort({ "favorites.addedAt": -1 });

  res.json(allRecipe);
};

export default ctrlWrapper(getFavoriteDrinks);
