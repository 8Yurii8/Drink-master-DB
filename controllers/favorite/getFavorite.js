import { ctrlWrapper } from "../../helpers/index.js";
import getRecipes from "../recipes/getRecipes.js";

const getFavoriteDrinks = async (req, res) => {
  const { _id } = req.params;
};

export default ctrlWrapper(getFavoriteDrinks);
