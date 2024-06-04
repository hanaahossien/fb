import { Router } from "express";
import { addPost, deleteePost, getPost, getall, getonepost, updatePost } from "./post.controler.js";

export const routerpost= Router();


routerpost.post('/addpost',addPost)


routerpost.get('/getPost',getPost)

routerpost.patch('/update/:id',updatePost)


routerpost.put('/delete/:id',deleteePost)

routerpost.get('/getonepost/:id',getonepost)


routerpost.get('/getall/:UserId/:postId',getall)
