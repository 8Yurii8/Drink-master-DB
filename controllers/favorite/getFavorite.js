import { ctrlWrapper } from "../../helpers/index.js";
import Recipes from "../../models/recipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { id } = req.user;

  try {
    const allRecipe = await Recipes.find({
      "favorites.userId": id,
    });

    res.json(allRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default ctrlWrapper(getFavoriteDrinks);
