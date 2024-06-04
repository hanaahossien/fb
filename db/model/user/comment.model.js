

import { sequelizeinstance } from "../../conectdb.js";
import { DataTypes } from "sequelize";
import { postmodel } from "./post.model.js";
import { Usermodel } from "./user.model.js";

export const commentmodel = sequelizeinstance.define('comment', {
    content: {
        type: DataTypes.STRING
        , allowNull: false,

    },

});

commentmodel.belongsTo(postmodel)
postmodel.hasMany(commentmodel)


commentmodel.belongsTo(Usermodel)
Usermodel.hasMany(commentmodel)

console.log(sequelizeinstance.models.comment)