import Joi from "joi";
import { emailRegexp } from "./regexp.js";

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

export default emailSchema;
