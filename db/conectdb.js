import { Sequelize } from 'sequelize';

export const sequelizeinstance = new Sequelize('bitryuu6hxrijagah8yd', 'ub2snpa2bkovrgk4', 'vmfaXhTErdrmNaOQtoIw', {
    host: 'bitryuu6hxrijagah8yd-mysql.services.clever-cloud.com',
    dialect: 'mysql'
  });


  export const tstdb= async()=>{
    
  try {
    await sequelizeinstance.authenticate();
    await sequelizeinstance.sync({alter:false , force: false });

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log(error);
  }
  }