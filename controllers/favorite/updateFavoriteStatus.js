import Recipes from "../../models/recipes.js";
import { ctrlWrapper } from "../../helpers/index.js";

const updateFavoriteStatus = async (req, res) => {
  const { _id } = req.user;
  const userId = _id.toString();
  const recipeId = req.params.id;

  try {
    const recipe = await Recipes.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.favorites.includes(userId)) {
      await Recipes.findByIdAndUpdate(recipeId, { $pull: { favorites: userId } }, { new: true });
      res.json({ message: "Recipe deleted from favorite" });
    } else {
      await Recipes.findByIdAndUpdate(
        recipeId,
        { $addToSet: { favorites: userId } },
        { new: true, upsert: true }
      );
      res.json({ message: "Recipe added to favorite" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export default ctrlWrapper(updateFavoriteStatus);
