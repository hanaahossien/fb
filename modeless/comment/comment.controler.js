import { commentmodel } from "../../db/model/user/comment.model.js";


export const addcomment = async (req, res) => {
    try {
        const { content, postId , UserId } = req.body
        const comment = await commentmodel.create({ content, postId , UserId   });
        res.json({ msg: " added comment", comment });
    } catch (error) {
        res.json({ msg: "  error", error });

    }
}



export const getcomment = async (req, res) => {
    try {
        const comment = await commentmodel.findAll();

        res.json({ msg: " all comment", comment });
    } catch (error) {
        console.log(error)
    }
}





export const updatecomment = async (req, res) => {
    try {
        const { content, postId , UserId } = req.body
        const {id} = req.params;
        const comment = await commentmodel.update(
            { content, postId , UserId  },
            {
                where: { id }
            },
        );

//res.json({comment})
        comment[0] == 1 ? res.json({ msg:  ` updated  comment  with id ${id}`}) : res.json({ msg: ` ${id}  not found ` })
    } catch (error) {
        console.log(error)
    }
}


export const deletecomment = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await commentmodel.destroy(
            {
                where: { id }
            },
        );

        comment  ? res.json({ msg:  ` delted  comment  with id ${id}`}) : res.json({ msg: ` ${id}  not found ` })

    } catch (error) {
        console.log(error)
    }
}


