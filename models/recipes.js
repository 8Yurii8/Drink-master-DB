import { Schema, model } from "mongoose";

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Recipes = model("recipes", recipesSchema);

export default Recipes;
