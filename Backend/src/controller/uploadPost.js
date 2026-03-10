const upload = require("../middleware/multer.js")
const mongoose = require("mongoose")
const Post = require("../models/post.model.js")
const asyncHandler = require("../utils/asyncHandler.js")
const uploadPost = asyncHandler(async(req,res) => {

    const imagePath = req.file.path
    const description = req.body.description

    
})

module.exports = uploadPost