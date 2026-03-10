import { Router } from "express";
import { showPosts } from "../controller/showPosts.js";
import { createPost } from "../controller/createPosts.js";
import { upload } from "../middleware/multer.js";

const router = Router();
router.get("/show-posts", showPosts);
router.post("/create-post", upload.single("image"), createPost);

export default router;

