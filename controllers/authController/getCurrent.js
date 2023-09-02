import { ctrlWrapper } from "../../helpers/index.js";

const getCurrent = ({ user }, res) => {
  const { name, email, subscription, _id, avatarURL } = user;

  res.json({
    user: {
      name,
      email,
      subscription,
      avatarURL,
      _id,
    },
  });
};

export default ctrlWrapper(getCurrent);
