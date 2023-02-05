import mongoose from "mongoose";

const Post = new mongoose.Schema({
    link: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model("Post", Post);