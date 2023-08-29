import { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Favorite = model("favorites", favoriteSchema);

export default Favorite;
