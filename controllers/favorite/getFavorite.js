import { ctrlWrapper } from "../../helpers/index.js";

import Recipes from "../../models/recipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { id } = req.user;

  const { page = 1, limit = 9 } = req.query;

  const qty = page * limit;

  const allRecipe = await Recipes.find(
    { favorites: [id] },
    "-createdAd, -updateAd",
    {
      skip: 0,
      limit: qty,
    }
  );

  const totalHitsRecipe = await Recipes.find({ favorites: [id] });

  res.json({ favorites: allRecipe, totalHits: totalHitsRecipe.length });
};

export default ctrlWrapper(getFavoriteDrinks);
