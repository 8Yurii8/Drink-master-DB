import { Schema, model } from 'mongoose';

export const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredientThumb: {
        type: String,
        required: true,
    },
    'thumb-medium': {
        type: String,
        required: true,
    },
    'thumb-small': {
        type: String,
        required: true,
    },
});

const Ingredients = model('ingredients', schema);

export default Ingredients;
