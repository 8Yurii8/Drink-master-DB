import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";
import User from "../../models/user.js";

const { JWT_SECRET } = process.env;

const signIn = async ({ body }, res) => {
  const { email, password, subscription } = body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      name: user.name,
      subscription: user.subscription,
      _id: user._id,
    },
  });
};

export default ctrlWrapper(signIn);
