import PostRepository from "./post.repository.js";

export default class PostController {
  constructor() {
    this.postRepository = new PostRepository();
  }

  async createPost(req, res) {
    const { userId, name, quantity } = req.body;

    try {
      const post = await this.postRepository.createPost({
        userId,
        name,
        quantity,
      });
      res.status(201).json({ data: { product: post } });
    } catch (err) {
      res.status(500).json({ message: "Failed to create post" });
    }
  }

  async getAllPost(req, res) {
    try {
      const products = await this.postRepository.getAllPost();
      console.log("Retrieved products:", products);
      res.status(200).json({ data: { products } });
    } catch (err) {
      res.status(500).json({ message: "Failed to retrieve products" });
    }
  }

  async deletePost(req, res) {
    const { id } = req.params;

    try {
      await this.postRepository.deletePost(id);
      res.status(200).json({ data: { message: "Product deleted" } });
    } catch (err) {
      res.status(500).json({ message: "Failed to delete post" });
    }
  }

  async updatePostQuantity(req, res) {
    const { id } = req.params;
    const number = parseInt(req.query.number, 10);

    try {
      const updatedPost = await this.postRepository.updatePostQuantity(
        id,
        number
      );
      console.log("updatedProduct " + updatedPost);
      res.status(200).json({
        data: { product: updatedPost },
        message: "Updated successfully",
      });
    } catch (err) {
      res.status(500).json({ message: "Failed to update post quantity" });
    }
  }
}
