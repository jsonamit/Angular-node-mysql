const Sequelize=require('sequelize');
const sequelize=require('../../dbconnection/conn')


const user = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
module.exports=user;