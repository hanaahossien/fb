import { Router } from "express";
import {  addcomment, deletecomment, getcomment, updatecomment } from "./comment.controler.js";

export const routercomment= Router()

 routercomment.post('/addcomment',addcomment)
routercomment.get('/getcomment',getcomment)

routercomment.patch('/updatecomment/:id',updatecomment)


routercomment.delete('/deletecomment/:id',deletecomment)
