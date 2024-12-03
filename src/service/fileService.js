const { uploadToCloudinary } = require("../config/cloudinary.js");
const fs = require("fs");

const cloudinaryUpload = async (file) => {
  try {
    const cloudinaryResponse = await uploadToCloudinary(file.path);
    fs.unlink(file.path, (err) => {
      if (err) {
        console.err(err);
      }
    });
    return cloudinaryResponse;
  } catch (error) {
    console.err(error);
  }
};

module.exports = cloudinaryUpload;
