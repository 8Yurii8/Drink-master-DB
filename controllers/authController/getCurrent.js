import { ctrlWrapper } from "../../helpers/index.js";

const getCurrent = ({ user }, res) => {
  const { name, email, _id } = user;

  res.json({
    user: {
      name,
      email,
      _id,
    },
  });
};

export default ctrlWrapper(getCurrent);
