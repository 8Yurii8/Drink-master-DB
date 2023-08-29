import { Own } from "../../models/index.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";

const deleteOwnRecipes = async (req, res) => {
  const { id } = req.params;

  const result = await Own.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  //  res.json(result);

  res.json({
    code: 200,
    message: "recip deleted",
  });
};

export default ctrlWrapper(deleteOwnRecipes);
