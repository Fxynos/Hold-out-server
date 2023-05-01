import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    story: {type: String}
})

export default mongoose.model("Post", PostSchema)