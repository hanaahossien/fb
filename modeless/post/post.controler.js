import { postmodel } from "../../db/model/user/post.model.js"
import { Usermodel } from "../../db/model/user/user.model.js";




export const addPost = async (req, res) => {
    try {
        const { title, content, UserId } = req.body
        const post = await postmodel.create({ title, content, UserId });

        res.json({ msg: " added post", post });
    } catch (error) {
        console.log(error)
    }
}



export const getPost = async (req, res) => {
    try {
        const post = await postmodel.findAll();

        res.json({ msg: " all post", post });
    } catch (error) {
        console.log(error)
    }
}



export const updatePost = async (req, res) => {
    try {
        const { title, content, UserId } = req.body
        const id = req.params.id;
        const post = await postmodel.update(
            { title, content, UserId },
            {
                where: { id }
            },
        );

        post[0] == 1 ? res.json({ msg: ` updated  post  with id ${id}` }) : res.json({ msg: ` ${id}  not found ` })
    } catch (error) {
        console.log(error)
    }
}




//softdelete
export const deleteePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postmodel.update(
            { poststatuse: "hidden" },
            {
                where: { id }
            },
        );

        post ? res.json({ msg: ` delted  post  with id ${id}` }) : res.json({ msg: ` ${id}  not found ` })

    } catch (error) {
        console.log(error)
    }
}



//10- Get a specific post with the author.


export const getonepost = async (req, res) => {
   try {
    const { id } = req.params;
    const post = await postmodel.findAll({
        where: { id},
        include: [{
            attributes: ['username']
            , model: Usermodel
        },
        ]
    });

  return post[0] ? res.json({ msg:"done", post }) : res.json({ msg: ` ${id}  not found tjis post ` })

   
   } catch (error) {
    console.log(error)
   }
}

