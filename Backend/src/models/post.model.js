import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    description: {
        type: String
    }
}
)

export const Post = mongoose.model("Post", postSchema)
