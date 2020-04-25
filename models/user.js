'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    //example:
    //items.associate = function(models) {
    // associations can be defined here
    // items.belongsTo(models.donation, { foreignKey: 'id'});
  };
  return User;
};