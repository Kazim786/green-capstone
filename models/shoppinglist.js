'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingList = sequelize.define('shoppingList', {
    itemName: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  shoppingList.associate = function(models) {
      shoppingList.belongsTo(models.Store, { foreignKey: 'id'});
      shoppingList.hasOne(models.User, { foreignKey: 'id'});
      

  };
  return shoppingList;
};