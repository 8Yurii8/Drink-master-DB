import { Recipes } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";

const searchController = async (req, res) => {
  const { drink, category, ingredients } = req.body;
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

  res.json(search);
};
export default ctrlWrapper(searchController);

// const searchController = async (req, res) => {
//   const { drink, category, ingredients } = req.body;
//   const { page = 1, limit = 10 } = req.query;
//   const skip = (page - 1) * limit;
//   const search = await Recipes.find({}, " ", {
//     skip,
//     limit,
//   });

//   let filter = search;

//   if (drink) {
//     const regex = new RegExp(drink, "i");
//     filter = filter.filter(
//       (recepi) => recepi._doc.drink && regex.test(recepi._doc.drink)
//     );
//   }

//   if (category) {
//     filter = filter.filter(
//       (recepi) =>
//         recepi._doc.category && recepi._doc.category.includes(category)
//     );
//   }

//   if (ingredients) {
//     filter = filter.filter(
//       (recepi) =>
//         recepi._doc.ingredients &&
//         recepi._doc.ingredients.some(
//           (ingredient) => ingredient.title === ingredients
//         )
//     );
//   }

//   res.json(filter);
// };

// export default ctrlWrapper(searchController);
