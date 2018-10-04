'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    username: "rohit",
                    email: "rohit@gmail.com",
                    password: "6687878",
                    createdAt:new Date(),
                    updatedAt:new Date(),
                },
                {
                    username: "vikas",
                    email: "vikas@gmail.com",
                    password: "6687878",
                    createdAt:new Date(),
                    updatedAt:new Date(),
                },
                {
                    username: "amit",
                    email: "amit@gmail.com",
                    password: "6687878",
                    createdAt:new Date(),
                    updatedAt:new Date(),
                },
                {
                    username: "rajesh",
                    email: "rajesh@gmail.com",
                    password: "6687878",
                    createdAt:new Date(),
                    updatedAt:new Date(),
                },
            ]
        )
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
