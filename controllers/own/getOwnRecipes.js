import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getOwnRecipes = async (req, res) => {
  const { _id } = req.body;
  const search = await Recipes.find({});
  const filter = search.filter(
    (recepi) => recepi._doc.own && recepi._doc.own.includes(_id)
  );

  res.json(filter);
};
export default ctrlWrapper(getOwnRecipes);
