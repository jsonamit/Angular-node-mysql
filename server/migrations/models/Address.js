'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('addresses', {
    user_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    street: DataTypes.STRING
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};