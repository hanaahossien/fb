import { sequelizeinstance } from "../../conectdb.js";
import { DataTypes } from "sequelize";

export const Usermodel = sequelizeinstance.define(
    'User',
    {
      // Model attributes are defined here
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    },
    {
      // Other model options go here
    },
  );
console.log(sequelizeinstance.models.User)
  
  







