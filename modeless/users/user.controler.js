import { Usermodel } from "../../db/model/user/user.model.js"
import bcrypt from "bcrypt"



// export const getUser = async (req, res) => {
// const user = await Usermodel.create();
// res.json({msg:"done get uer", user:user})
// }


export const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await Usermodel.findOne({
        where: { email }
    })
    if (user == null) {
       return res.json({msg :"invalid"})
    }
    const pass= bcrypt.compareSync(password,user.password)
    if(!pass)
        {
          return  res.json({msg :"invalid"})
        }
        
        res.json({msg :"login sucssed"})

}

export const newRegster = async (req, res) => {
    const { username, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password,10)

    const newuser = await Usermodel.findOrCreate({
        where: { email },
        defaults: {
            username, email, password:hashpassword
        },
    });
    if (!newuser[1]) {
        return res.json({ msg: "this user already exist" })
    }
    res.json({ msg: "new user added sucssed", newuser })

}