import { Schema, model } from "mongoose";

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: false,
  },
  favorites: {
    type: Array,
  },
});

const Recipes = model("recipes", recipesSchema);

export default Recipes;
