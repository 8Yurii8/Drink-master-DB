import Recipes from "../../models/recipes.js";
import { ctrlWrapper } from "../../helpers/index.js";

const updateFavoriteStatus = async (req, res) => {
  const { _id } = req.user;
  const userId = _id.toString();
  const recipeId = req.params.id;

  const recipes = await Recipes.findById(recipeId);
  if (recipes.favorites.includes(userId)) {
    await Recipes.findByIdAndUpdate(
      recipeId,
      { $pull: { favorites: userId.toString() } },
      {
        new: true,
      }
    );
    res.json({ message: "Recipe deleted from favorite" });
  } else {
    await Recipes.findByIdAndUpdate(
      recipeId,
      { $push: { favorites: userId } },
      {
        new: true,
      }
    );

    res.json({ message: "Recipe added to favorite" });
  }
};

export default ctrlWrapper(updateFavoriteStatus);
