import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {connectUsingMongoose} from "./src/config/mongooseConfig.js";
import postRouter from "./src/features/post/post.routes.js";

const server=express();

dotenv.config();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get("/",(req, res)=>{
    res.send("welcome to Ecommerse API");
});

server.use("/products", postRouter);

server.listen(3200);
console.log("server is running at 3200");

connectUsingMongoose()