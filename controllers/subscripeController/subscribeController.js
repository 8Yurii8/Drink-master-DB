import { sendSubscribeMessage, HttpError } from "../../helpers/index.js";
import User from "../../models/user.js";
import { subscripeMessage } from "../../constans/index.js";

const subscribeController = async (req, res) => {
  const { email } = req.body;
  const { id, subscription } = req.user;

  if (subscription !== "") {
    throw HttpError(409, "You are already subscribed");
  }

  const sendMessage = {
    to: email,
    subject: "You are subscribed to the newsletter from DrinkMaster",
    html: subscripeMessage,
  };

  await User.findByIdAndUpdate(id, { subscription: email });

  await sendSubscribeMessage(sendMessage);

  res.status(200);
  res.json({ message: "Subscribe is succesfull" });
};

export default subscribeController;
