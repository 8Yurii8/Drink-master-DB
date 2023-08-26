import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { ctrlWrapper } from "../helpers/index.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (!token || bearer !== "Bearer") {
    throw HttpError(401, "Unauthorized");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw HttpError(401, "Unauthorized");
    }
    req.user = user;
    next();
  } catch {
    throw HttpError(401, "Unauthorized");
  }
};

export default ctrlWrapper(authenticate);
