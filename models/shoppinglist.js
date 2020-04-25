'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingList = sequelize.define('shoppingList', {
    itemName: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  shoppingList.associate = function(models) {
      shoppingList.belongsTo(models.store, { foreignKey: 'id'});
      shoppingList.hasOne(models.user, { foreignKey: 'id'});
      //should i replace shoppingList (name of table) with itemName?

  };
  return shoppingList;
};