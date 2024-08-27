
import mongoose from "mongoose";

const postSchema=new mongoose.Schema(
    {
        name:{type:String, required:true},
        quantity:{type:Number, required:true}
    },
    {
        timestamps:true,
    }
)

const Post=mongoose.model("Post", postSchema);
export default Post;