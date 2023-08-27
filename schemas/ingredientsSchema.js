import Joi from 'joi';

const ingredientsSchema = Joi.object({
    title: Joi.string().required(),
    ingredientThumb: Joi.string().required(),
    thumbMedium: Joi.string().required(),
    thumbSmall: Joi.string().required(),
});

export default ingredientsSchema;
