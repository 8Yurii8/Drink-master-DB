import subscribeController from "./subscribeController.js";
import { ctrlWrapper } from "../../helpers/index.js";

const ctrl = {
  subscribeController: ctrlWrapper(subscribeController),
};

export default ctrl;
