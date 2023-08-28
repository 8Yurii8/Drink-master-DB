import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks/hook.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      default: "",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", handleUpdateValidate);

userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
