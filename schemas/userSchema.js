import Joi from "joi";
import { emailRegexp, passwordUppercase } from "./regexp.js";

const userSignUpSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
    "string.empty": "Name cannot be empty.",
  }),
  email: Joi.string().required().pattern(emailRegexp).messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.pattern.base": "Email is not in a valid format.",
  }),
  password: Joi.string()
    .pattern(passwordUppercase)
    .min(6)
    .max(16)
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.min": "Password must be at least {#limit} characters long.",
      "string.max": "Password cannot be longer than {#limit} characters.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter.",
    }),
});

const userSignInSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp).messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.pattern.base": "Email is not in a valid format.",
  }),
  password: Joi.string()
    .pattern(passwordUppercase)
    .min(6)
    .max(16)
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.min": "Password must be at least {#limit} characters long.",
      "string.max": "Password cannot be longer than {#limit} characters.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter.",
    }),
});

export default {
  userSignUpSchema,
  userSignInSchema,
};
