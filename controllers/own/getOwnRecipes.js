// import { Own } from "../../models/index.js";
// import { ctrlWrapper } from "../../helpers/index.js";

// const getOwnRecipes = async (req, res) => {
//   const { _id } = req;
//   // console.log(_id);

//   const { page, limit, own } = req.query;

//   const skip = (page - 1) * limit;

//   const result = await Own.find({ _id, own }, "-createdAt -updatedAt", {
//     skip,
//     limit,
//   });

//   res.json(result);
//   // res.json({
//   //   status: "success",
//   //   code: 200,
//   //   data: result,
//   // });
// };

// export default ctrlWrapper(getOwnRecipes);

import { Own } from "../../models/index.js";
import { ctrlWrapper } from "../../helpers/index.js";
const getOwnRecipes = async (req, res) => {
  const { _id: id } = req;
  const result = await Own.find({ own: id });
  const filteredResult = result.filter((item) => item.own.equals(id));
  res.json(filteredResult);
};
export default ctrlWrapper(getOwnRecipes);
