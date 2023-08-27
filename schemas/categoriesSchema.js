import Joi from 'joi';

const categoriesSchema = Joi.object({
    title: Joi.string().required(),
});

export default categoriesSchema;
