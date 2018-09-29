const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'path/to/database.sqlite'
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
         require('../model/userModel/user.model');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
