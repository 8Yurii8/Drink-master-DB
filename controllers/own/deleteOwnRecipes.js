import { Recipes } from "../../models/index.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";

const deleteOwnRecipes = async (req, res) => {
  const { _id } = req.user;
  const userId = _id.toString();
  const { id } = req.params;

  try {
    const recipeDelete = await Recipes.findById(id);

    if (!recipeDelete) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const recipeDeleteOwnerId = recipeDelete.owner.toString();

    if (recipeDeleteOwnerId !== userId) {
      return res.json({
        message: "This user does not have this recipe",
      });
      return;
    } else {
      const result = await Recipes.findByIdAndDelete(id);

      if (!result) {
        throw HttpError(404, "Not found");
      }
      res.json({
        result: result._id,
        code: 200,
        message: "recip deleted",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export default ctrlWrapper(deleteOwnRecipes);
