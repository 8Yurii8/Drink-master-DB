import { ctrlWrapper } from "../../helpers/index.js";

const getCurrent = ({ user }, res) => {
  const { name, email, subscription, _id } = user;

  res.json({
    user: {
      name,
      email,
      subscription,
      _id,
    },
  });
};

export default ctrlWrapper(getCurrent);
