import { sendSubscribeMessage, HttpError } from "../../helpers/index.js";
import User from "../../models/user.js";
import { unsubscribeMessage } from "../../constans/index.js";

const unsubscribeController = async (req, res) => {
  const { id, subscription } = req.user;

  if (subscription === "") {
    throw HttpError(400, "You are not subscribed");
  }

  const sendMessage = {
    to: subscription,
    subject: "You are unsubscribed from the newsletter from DrinkMaster",
    html: unsubscribeMessage,
  };

  await User.findByIdAndUpdate(id, { subscription: "" });

  await sendSubscribeMessage(sendMessage);

  res.status(200);
  res.json({
    message: "Unsubscribe is successful",
    unsubscriptionEmail: subscription,
  });
};

export default unsubscribeController;
