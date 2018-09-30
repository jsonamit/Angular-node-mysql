const Sequelize=require('sequelize');
const sequelize=require('../../dbconnection/conn')


const city = sequelize.define('city', {
    username: Sequelize.STRING,
    birthday: Sequelize.STRING
});
module.exports=city;