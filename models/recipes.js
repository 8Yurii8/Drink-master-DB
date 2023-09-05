import { Schema, model } from 'mongoose';
import { urlRegexp } from '../schemas/regexp.js';

const ingredientsSchema = new Schema({
    title: { type: String, required: true },
    measure: { type: String, required: true },
    ingredientThumb: { type: String, required: true },
    'thumb-medium': { type: String, required: true },
    'thumb-small': { type: String, required: true },
});

const favoriteSchema = new Schema({
    userId: String,
    addedAt: Date,
});

const schema = new Schema(
    {
        about: {
            type: String,
            minlength: 10,
            required: true,
        },
        drink: {
            type: String,
            minlength: 3,
            required: true,
        },
        drinkThumb: {
            type: String,
            match: [
                urlRegexp,
                'Field "drinkThumb" must be a valid URL starting with https://',
            ],
            required: true,
        },
        drinkAlternate: {
            type: String,
            default: null,
        },
        tags: {
            type: String,
            default: null,
        },
        video: {
            type: String,
            default: null,
        },
        category: {
            type: String,
            required: true,
        },
        IBA: {
            type: String,
            default: null,
        },
        alcoholic: {
            type: String,
            default: null,
        },
        glass: {
            type: String,
            required: true,
        },
        instructions: {
            type: [String],
            required: true,
        },
        instructionsES: {
            type: [String],
            default: null,
        },
        instructionsDE: {
            type: [String],
            default: null,
        },
        instructionsFR: {
            type: [String],
            default: null,
        },
        instructionsIT: {
            type: [String],
            default: null,
        },
        instructionsRU: {
            type: [String],
            default: null,
        },
        instructionsPL: {
            type: [String],
            default: null,
        },
        instructionsUK: {
            type: [String],
            default: null,
        },
        ingredients: {
            type: [ingredientsSchema],
            required: true,
        },
        owner: {
            type: String,
        },
        favorites: [favoriteSchema],
    },
    { versionKey: false, timestamps: true }
);

const Recipes = model('recipes', schema);

export default Recipes;
