import Recipes from "../../models/recipes.js";
import { ctrlWrapper } from "../../helpers/index.js";

const addToFavorite = async (req, res) => {
  const { _id } = req.user;
  const userId = _id.toString();
  const recipeId = req.params.id;

  try {
    let recipe = await Recipes.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    if (recipe.favorites.includes(userId)) {
      return res.json({ message: "The recipe is already in favorites." });
    }
    recipe = await Recipes.findByIdAndUpdate(
      recipeId,
      { $addToSet: { favorites: userId } },
      { new: true, upsert: true }
    );
    const favorites = recipe.favorites;
    res.json({ favorites, message: "Recipe added to favorite" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export default ctrlWrapper(addToFavorite);
