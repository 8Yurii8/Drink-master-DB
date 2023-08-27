import { HttpError } from "../helpers/index.js";

const validateBody = (schema) => {
  const func = ({body}, _, next) => {
    const { error } = schema.validate(body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
