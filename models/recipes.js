import { Schema, model } from "mongoose";

const recipesSchema = new Schema({});

const Recipes = model("recipes", recipesSchema);

export default Recipes;
