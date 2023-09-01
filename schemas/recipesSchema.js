import Joi from 'joi';

const ingredientsSchema = Joi.object({
    title: Joi.string().required(),
    measure: Joi.string().required(),
    ingredientThumb: Joi.string().required(),
    'thumb-medium': Joi.string().required(),
    'thumb-small': Joi.string().required(),
});

const recipesSchema = Joi.object({
    drink: Joi.string().required(),
    drinkAlternate: Joi.string().default(''),
    tags: Joi.array().items(Joi.string()).default([]),
    video: Joi.string().default(''),
    category: Joi.string().required(),
    IBA: Joi.string().default(''),
    alcoholic: Joi.string().default(''),
    glass: Joi.string().required(),
    instructions: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsES: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsDE: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsFR: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsIT: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsRU: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsPL: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    instructionsUK: Joi.alternatives().try(
        Joi.string().required(),
        Joi.array().items(Joi.string()).required()
    ),
    ingredients: Joi.array().items(ingredientsSchema).required(),
    owner: Joi.string().required(),
});

export default recipesSchema;
