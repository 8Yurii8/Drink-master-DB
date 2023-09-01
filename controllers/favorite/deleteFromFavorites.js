import Recipes from "../../models/recipes.js";
import { ctrlWrapper } from "../../helpers/index.js";

const deleteFromFavorites = async (req, res) => {
  const { _id } = req.user;
  const userId = _id.toString();
  const recipeId = req.params.id;

  try {
    let recipe = await Recipes.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    if (!recipe.favorites.includes(userId)) {
      return res.json({ message: "The recipe was previously removed from favorites." });
    }

    recipe = await Recipes.findByIdAndUpdate(
      recipeId,
      { $pull: { favorites: userId } },
      { new: true }
    );
    const favorites = recipe.favorites;
    res.json({ favorites, message: "Recipe deleted from favorite" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export default ctrlWrapper(deleteFromFavorites);
