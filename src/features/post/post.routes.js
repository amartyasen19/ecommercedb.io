import express from "express";
import PostController from "./post.controller.js";

const postRouter = express.Router();

const postController = new PostController();
postRouter.post("/create", (req, res) => {
  postController.createPost(req, res);
});

postRouter.get("/", (req, res) => {
  postController.getAllPost(req, res);
});

postRouter.delete("/:id", (req, res) => {
  postController.deletePost(req, res);
});

postRouter.put("/:id/update_quantity", (req, res) => {
  postController.updatePostQuantity(req, res);
});

export default postRouter;
