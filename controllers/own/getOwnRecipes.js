import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const getOwnRecipes = async (req, res) => {
  const { _id } = req.user;
  const search = await Recipes.find({});
  const filter = search.filter(
    (recepi) => recepi._doc.owner && recepi._doc.owner.includes(_id)
  );

  res.json(filter);
};
export default ctrlWrapper(getOwnRecipes);
