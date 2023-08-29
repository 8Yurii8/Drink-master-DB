import { Schema, model } from "mongoose";

const ounSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Own = model("recipes", ounSchema);

export default Own;
