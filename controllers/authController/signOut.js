import { ctrlWrapper } from "../../helpers/index.js";
import User from "../../models/user.js";

const signOut = async ({ user }, res) => {
  const { _id } = user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Signout success",
  });
};

export default ctrlWrapper(signOut);
