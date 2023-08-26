import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import User from "../../models/user.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";

const signUp = async ({ body }, res) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const { name } = await User.create({
    ...body,
    password: hashPassword,
    verificationToken,
  });

  res.status(201).json({
    name,
    email,
  });
};

export default ctrlWrapper(signUp);
