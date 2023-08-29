import { Recipes } from "../../models/index.js";
import { ctrlWrapper, HttpError } from "../../helpers/index.js";

const getOwnRecipes = async (req, res) => {
  const { id } = req.params;
  const result = await Recipes.findById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

export default ctrlWrapper(getOwnRecipes);
