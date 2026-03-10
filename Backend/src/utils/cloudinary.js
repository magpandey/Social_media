const cloudinary = require("cloudinary").v2
const fs = require("fs")
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = async(filePath) => {
    try {
    if(!filePath) {
        console.log("No file path provided for upload to cloudinary!!!")
    }
    const result = await cloudinary.uploader.upload(filePath, {
        resource_type:"auto"
    })
    fs.unlinkSync(filePath)

    return result
    return result.secure_url
    } catch (error) {
        if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
        console.log("Failed to upload image to cloudinary!!!")
        return null
    }
}