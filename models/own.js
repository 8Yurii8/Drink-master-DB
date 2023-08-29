import { Schema, model } from "mongoose";

const ounSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  //   own: {
  //     type: String,
  //   },
  owner: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "user",
  },
});

const Own = model("recipes", ounSchema);

export default Own;
