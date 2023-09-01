import Joi from "joi";

const searchSchemas = Joi.object({
  drink: Joi.string(),
  category: Joi.string(),
  ingredients: Joi.string(),
});

export default searchSchemas;
