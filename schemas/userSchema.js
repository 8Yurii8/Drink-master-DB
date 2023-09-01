import Joi from "joi";
import { emailRegexp, passwordUppercase } from "./regexp.js";

const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().pattern(passwordUppercase).min(6).max(16).required(),
});

const userSignInSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().pattern(passwordUppercase).min(6).max(16).required(),
});

export default {
  userSignUpSchema,
  userSignInSchema,
};
