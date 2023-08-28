import { Recipes } from "../../models/index.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";

const deleteRecipes = async (req, res) => {
  const { id } = req.params;

  const result = await Recipes.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  //  res.json(result);

  res.json({
    code: 200,
    message: "contact deleted",
  });
};

export default ctrlWrapper(deleteRecipes);
