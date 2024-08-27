import mongoose from "mongoose";
import Post from "./post.schema.js";

export default class PostRepository {
  async createPost(post) {
    try {
      return await Post.create(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create post");
    }
  }

  async getAllPost() {
    try {
      return await Post.find({});
    } catch (err) {
      console.log(err);
      throw new Error("Failed to retrieve products");
    }
  }

  async deletePost(id) {
    try {
      const result = await Post.findByIdAndDelete(id);
      if (!result) {
        throw new Error("Product not found");
      }
      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete post");
    }
  }

  async updatePostQuantity(id, number) {
    try {
      const product = await Post.findById(id);
      if (!product) {
        throw new Error("Post not found");
      }
      product.quantity += number;
      const updatedProduct = await product.save(); // Save and return the updated product
      return updatedProduct;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update post quantity");
    }
  }
}
