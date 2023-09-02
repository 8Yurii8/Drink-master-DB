import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const searchController = async (req, res) => {
  const { drink, category, ingredients } = req.query;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const searchConditions = {};

  if (drink) {
    const regex = new RegExp(drink, "i");
    searchConditions.drink = regex;
  }

  if (category) {
    searchConditions.category = category;
  }

  if (ingredients) {
    searchConditions["ingredients.title"] = ingredients;
  }

  const search = await Recipes.find(searchConditions).skip(skip).limit(limit);

  const totalResults = await Recipes.countDocuments(searchConditions);

  const totalPages = Math.ceil(totalResults / limit);

  res.json({
    results: search,
    totalResults,
    totalPages,
  });
};

export default ctrlWrapper(searchController);
