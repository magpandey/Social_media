import {Post} from "../models/post.model.js"
import mongoose from "mongoose"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {upload} from "../middleware/multer.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

const showPosts = asyncHandler(async(req,res) => {
    const posts = await Post.find().sort({createdAt: -1})
    res.status(200).json(new ApiResponse(true,"Posts retrieved successfully",posts))
})

export {showPosts}