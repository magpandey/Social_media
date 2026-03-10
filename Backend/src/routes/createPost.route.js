const showPosts = require("../controller/showPosts.js")
const upload = require("../middleware/multer.js")
const express = require("express")
const router = express.Router()
const uploadPost = require("../controller/uploadPost.js")

router.post("/posts", upload.single("image"), uploadPost)
router.get("/posts",showPosts)
module.exports = router