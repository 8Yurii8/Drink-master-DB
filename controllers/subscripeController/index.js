import subscribeController from "./subscribeController.js";
import unsubscribeController from "./unsubscribeController.js";
import { ctrlWrapper } from "../../helpers/index.js";

const ctrl = {
  subscribeController: ctrlWrapper(subscribeController),
  unsubscribeController: ctrlWrapper(unsubscribeController),
};

export default ctrl;
