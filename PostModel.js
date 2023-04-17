import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    choose: {type: Boolean, required: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model("Post", PostSchema)