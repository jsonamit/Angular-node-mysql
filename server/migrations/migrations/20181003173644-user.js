'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.createTable(
          'users',
          {
              id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              username: {
                  type: Sequelize.STRING,
              },
              email: {
                  type: Sequelize.STRING,
              },
              password: {
                  type: Sequelize.STRING,
              },
              createdAt: {
                  type: Sequelize.DATE
              },
              updatedAt: {
                  type: Sequelize.DATE
              },

          }
      )
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.dropTable('users');
  }
};
