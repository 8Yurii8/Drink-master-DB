import { Schema, model } from "mongoose";

const mainrecipesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const MainRecipes = model("mainrecipes", mainrecipesSchema);

export default MainRecipes;
