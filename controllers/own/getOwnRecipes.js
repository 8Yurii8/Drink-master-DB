import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getOwnRecipes = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const search = await Recipes.find({ owner: [_id] }, " ", {
    skip,
    limit,
  });

  res.json(search);
};
export default ctrlWrapper(getOwnRecipes);
