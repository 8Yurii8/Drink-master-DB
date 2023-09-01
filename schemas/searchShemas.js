import Joi from "joi";

const searchShemas = Joi.object({
  drink: Joi.string(),
  category: Joi.string(),
  ingredients: Joi.string(),
});

export default searchShemas;
