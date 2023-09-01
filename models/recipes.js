import { Schema, model } from "mongoose";
const ingredientsSchema = new Schema({
  title: { type: String, required: true },
  measure: { type: String, required: true },
  ingredientThumb: { type: String, required: true },
  "thumb-medium": { type: String, required: true },
  "thumb-small": { type: String, required: true },
});

const schema = new Schema({
  drink: {
    type: String,
    required: true,
  },
  drinkAlternate: {
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    default: "",
  },
  video: {
    type: String,
    default: "",
  },

  category: {
    type: String,
    required: true,
  },
  IBA: {
    type: String,
    default: "",
  },
  alcoholic: {
    type: String,
    default: "",
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
    default: "",
  },
  instructionsDE: {
    type: [String],
    default: "",
  },
  instructionsFR: {
    type: [String],
    default: "",
  },
  instructionsIT: {
    type: [String],
    default: "",
  },
  instructionsRU: {
    type: [String],
    default: "",
  },
  instructionsPL: {
    type: [String],
    default: "",
  },
  instructionsUK: {
    type: [String],
    default: "",
  },
  ingredients: {
    type: [ingredientsSchema],
    required: true,
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: "user",
    default: "",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const Recipes = model("recipes", schema);

export default Recipes;
