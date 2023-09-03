import fs from "fs/promises";
import User from "../../models/user.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";
import { cloudinary } from "../../cloudinary/index.js";

const updateUser = async (req, res) => {
  const { id } = req.user;

  const { name, avatarURL } = req.body;

  if (!name && !avatarURL) {
    throw HttpError(
      404,
      "At least one field (name or avatarURL) must be provided."
    );
  }

  let cloudinaryAvatarURL = req.user.avatarURL;

  if (req.file) {
    const { path: filePath, originalname } = req.file;

    const cloudinaryOptions = {
      folder: "avatars",
      allowed_formats: ["jpg", "jpeg", "png", "bmp"],
      public_id: `${originalname}_${id}`,
      transformation: { width: 100, height: 100, crop: "fill" },
      overwrite: true,
      secure: true,
    };

    const { secure_url } = await cloudinary.uploader.upload(
      filePath,
      cloudinaryOptions
    );

    cloudinaryAvatarURL = secure_url;

    await fs.unlink(filePath);
  }

  const updateData = {};

  if (name) {
    updateData.name = name;
  }

  if (cloudinaryAvatarURL) {
    updateData.avatarURL = cloudinaryAvatarURL;
  }

  const newUser = await User.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  res.status(201).json({
    avatarURL: newUser.avatarURL,
    name: newUser.name,
  });
};

export default ctrlWrapper(updateUser);
