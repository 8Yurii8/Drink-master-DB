import Joi from "joi";

const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSignInSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default {
  userSignUpSchema,
  userSignInSchema,
};
