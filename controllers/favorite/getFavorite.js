import { ctrlWrapper } from "../../helpers/index.js";

import Recipes from "../../models/recipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { id } = req.user;

  const { page = 1, limit = 3 } = req.query;

  const qty = page * limit;

  const allRecipe = await Recipes.find({}, "-createdAd, -updateAd", {
    skip: 0,
    limit: qty,
  });

  const filterFavorites = allRecipe.filter(
    (drink) => drink._doc.favorites && drink._doc.favorites.includes(id)
  );

  res.json(filterFavorites);
};

export default ctrlWrapper(getFavoriteDrinks);
