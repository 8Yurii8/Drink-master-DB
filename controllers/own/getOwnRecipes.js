import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getOwnRecipes = async (req, res) => {
  const { _id } = req.user;
  const search = await Recipes.find({ owner: [_id] }).sort({ createdAt: -1 });

  res.json(search);
};
export default ctrlWrapper(getOwnRecipes);
