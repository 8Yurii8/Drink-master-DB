import fs from "fs/promises";
import User from "../../models/user.js";
import { HttpError, ctrlWrapper } from "../../helpers/index.js";
import { cloudinary } from "../../cloudinary/index.js";

const updateUser = async (req, res) => {
  const { id } = req.user;

  if (!req.file) throw HttpError(404, "No image provided");

  const { path: filePath, originalname } = req.file;

  const cloudinaryOptions = {
    folder: "avatars",
    allowed_formats: ["jpg", "jpeg", "png", "bmp"],
    public_id: `${originalname}_${id}`,
    transformation: { width: 100, height: 100, crop: "fill" },
    overwrite: true,
    secure: true,
  };

  const { secure_url: cloudinaryAvatarURL } = await cloudinary.uploader.upload(
    filePath,
    cloudinaryOptions
  );

  await fs.unlink(filePath);

  const data = {
    avatarURL: cloudinaryAvatarURL,
    ...req.body,
  };

  const newUser = await User.findByIdAndUpdate(id, data, {
    new: true,
  });

  res.status(201).json({
    avatarURL: newUser.avatarURL,
    name: newUser.name,
  });
};

export default ctrlWrapper(updateUser);
