



import { sequelizeinstance } from "../../conectdb.js";
import { DataTypes } from "sequelize";
import { Usermodel } from "./user.model.js";

export const postmodel = sequelizeinstance.define(
    'post',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poststatuse: {
        type: DataTypes.STRING,
        defaultValue:"visible",
        allowNull: false,
      }
    },
    {
      // Other model options go here
    },
  );


console.log(sequelizeinstance.models.post)


postmodel.belongsTo(Usermodel)
Usermodel.hasMany(postmodel)




