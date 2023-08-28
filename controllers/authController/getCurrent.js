import { ctrlWrapper } from "../../helpers/index.js";

const getCurrent = ({ user }, res) => {
  const { name, email } = user;

  res.json({
    name,
    email,
  });
};

export default ctrlWrapper(getCurrent);
