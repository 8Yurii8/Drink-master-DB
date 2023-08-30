import { Schema, model } from "mongoose";

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  favorites: {
    type: Array,
  },
  category: {
    type: String,
    required: false,
  },
});

const Recipes = model("recipes", recipesSchema);

export default Recipes;
