import Joi from 'joi';

const favoritesSchema = Joi.object({
    userId: Joi.string().required().messages({
        'any.required': 'missing required "userId" field',
        'string.base': 'field "userId" must be a string',
    }),
    addedAt: Joi.date().iso().required().messages({
        'any.required': 'missing required "addedAt" field',
    }),
});

const addOwnRecipeSchema = Joi.object({
    about: Joi.string().min(10).required().messages({
        'any.required': 'missing required "about" field',
        'string.base':
            'field "about" must be a string at least 10 characters long',
    }),
    drink: Joi.string().min(3).required().messages({
        'any.required': 'missing required "drink" field',
        'string.base':
            'field "drink" must be a string at least 3 characters long',
    }),
    drinkAlternate: Joi.string().default(null),
    tags: Joi.string().default(null),
    video: Joi.string().default(null),
    category: Joi.string().required().messages({
        'any.required': 'missing required "category" field',
        'string.base': 'field "category" must be a string',
    }),
    IBA: Joi.string().default(null),
    alcoholic: Joi.string().default(null),
    glass: Joi.string().required().messages({
        'any.required': 'missing required "glass" field',
        'string.base': 'field "glass" must be a string',
    }),
    instructions: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .required()
        .messages({
            'any.required': 'missing required "instructions" field',
            'string.base':
                'field "instructions" must be a string or array of strings at least 10 characters long',
        }),
    instructionsES: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsDE: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsFR: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsIT: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsRU: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsPL: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    instructionsUK: Joi.alternatives()
        .try(
            Joi.string().required(),
            Joi.array().items(Joi.string()).required()
        )
        .default(null),
    ingredients: Joi.string().required().messages({
        'any.required': 'missing required "ingredients" field',
        'string.base': 'field "ingredients" must be a string',
    }),
    owner: Joi.string(),
    favorites: Joi.array().items(favoritesSchema),
});

export default addOwnRecipeSchema;
