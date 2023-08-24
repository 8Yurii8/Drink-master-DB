import Joi from "joi";

const userRegisterShema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default { userRegisterShema };
