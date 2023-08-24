import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValideta } from "./hooks/contactHook.js";

const userShema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: { type: String },
  },
  { versionKey: false, timeseries: true }
);

userShema.pre("findOneAndUpdate", handleUpdateValideta);
userShema.post("save", handleSaveError);
userShema.post("findOneAndUpdate", handleSaveError);

export const User = model("user", userShema);
