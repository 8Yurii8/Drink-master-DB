import { ctrlWrapper } from "../../helpers/index.js";

import Recipes from "../../models/recipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { userId } = req.params;
  const { page = 1, limit = 3 } = req.query;

  const skip = (page - 1) * limit;

  const allRecipe = await Recipes.find({}, "-createdAd, -updateAd", {
    skip,
    limit,
  });

  const filterFavorites = allRecipe.filter(
    (drink) => drink._doc.favorites && drink._doc.favorites.includes(userId)
  );

  res.json(filterFavorites);
};

export default ctrlWrapper(getFavoriteDrinks);
