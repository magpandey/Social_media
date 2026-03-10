import {Router} from "express"
import { showPosts,createPosts } from "../controller/showPosts"

import {upload} from "../middleware/multer.js"
const router = Router()

router.route.get("/show-posts",showPosts)
router.route.post("/create-post",upload.single("image"),createPosts)