import Joi from 'joi';

const ingredientsSchema = Joi.object({
    title: Joi.string().required(),
    ingredientThumb: Joi.string().required(),
    'thumb-medium': Joi.string().required(),
    'thumb-small': Joi.string().required(),
});

export default ingredientsSchema;
