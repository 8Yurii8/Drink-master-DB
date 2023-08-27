import { Schema, model } from 'mongoose';

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredientThumb: {
        type: String,
        required: true,
    },
    thumbMedium: {
        type: Boolean,
        required: true,
    },
    thumbSmall: {
        type: String,
        required: true,
    },
});

const Ingredients = model('ingredients', schema);

export default Ingredients;
