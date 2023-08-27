import Joi from 'joi';

const usersRegisterSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export default usersRegisterSchema;
