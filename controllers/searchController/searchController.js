import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const searchController = async (req, res) => {
  const { drink, category, ingredients } = req.query;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const query = {};

  if (drink) {
    query.drink = new RegExp(drink, "i");
  }

  if (category) {
    query.category = category;
  }

  if (ingredients) {
    query["ingredients.title"] = ingredients;
  }

  const search = await Recipes.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalResults = await Recipes.countDocuments(query);

  const totalPages = Math.ceil(totalResults / limit);

  res.json({
    results: search,
    totalResults,
    totalPages,
  });
};

export default ctrlWrapper(searchController);
