 import { Router } from "express";
import {  loginUser, newRegster } from "./user.controler.js";
export const userroouter= Router()


//userroouter.get('/user',getUser)

userroouter.post('/adduser',newRegster)

  userroouter.get('/login',loginUser)

