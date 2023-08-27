import Joi from 'joi';

const glassesSchema = Joi.object({
    title: Joi.string().required(),
});

export default glassesSchema;
