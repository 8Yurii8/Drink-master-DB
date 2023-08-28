import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getRecipes = async (req, res) => {
  const result = await Recipes.find({});
  res.json(result);
};

export default ctrlWrapper(getRecipes);
