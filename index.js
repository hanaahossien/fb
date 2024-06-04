
import express from 'express'
import { tstdb } from './db/conectdb.js'
import { Usermodel } from './db/model/user/user.model.js'
import { postmodel } from './db/model/user/post.model.js'
import { commentmodel } from './db/model/user/comment.model.js'
import {  userroouter } from './modeless/users/user.router.js'
import { routerpost } from './modeless/post/post.router.js'
import { routercomment } from './modeless/comment/comment.router.js'
//import { routerpost } from './modeless/post/post.router.js'

export const app = express()
const port = 2500
tstdb()
app.use(express.json())
//app.use(userroouter , routerpost )
// postmodel

// commentmodel
//  Usermodel

app.use(userroouter)

app.use(routerpost)
app.use(routercomment)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
