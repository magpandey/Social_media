import {Post} from "../models/post.model.js"
import mongoose from "mongoose"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {upload} from "../middleware/multer.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"
const createPost = asyncHandler(async(req,res) => {
    const {description} = req.body
    const file = req.file
    if(!file) {
        throw new ApiError(400,"Image is required")
    }
    const result = await uploadOnCloudinary(file.path)
    const post = await Post.create({
        image: result.secure_url,
        description
    })
    res.status(201).json(new ApiResponse(true,"Post created successfully",post))

})
export {createPost}