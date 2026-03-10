const Post = require("../models/post.model.js")
const asyncHandler = require("../utils/asyncHandler.js")

const showPosts = asyncHandler(async(req,res) => {{
    const allPosts = await Post.find()

    if(allPosts.length === 0){
        console.log("Failed to fetch posts from database!!!")
        return res.status(500).json({ message: "Failed to fetch posts from database!!!" })
    }
    return res.status(200).json({ message: "Posts fetched successfully!!!", posts: allPosts })
}})
module.exports = showPosts