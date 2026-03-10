const uploadToCloudinary = require("../utils/cloudinary.js")
const mongoose = require("mongoose")
const Post = require("../models/post.model.js")
const asyncHandler = require("../utils/asyncHandler.js")
const uploadPost = asyncHandler(async(req,res) => {

    const imagePath = req.file.path
    const description = req.body.description

    const cloudinaryResponse = await uploadToCloudinary(imagePath)

    if(!cloudinaryResponse){
        console.log("Failed to upload image to cloudinary!!!")
        return res.status(500).json({ message: "Failed to upload image to cloudinary!!!" })
    }

    const newPost = await  Post.create({
        image: cloudinaryResponse.secure_url,
        description: description
    })

    return res.status(201).json({ message: "Post uploaded successfully!!!", post: newPost })
})

module.exports = uploadPost