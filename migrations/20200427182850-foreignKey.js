'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.


      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn('shoppingLists', 'User ID', 
      {type: Sequelize.INTEGER, allowNull: false, 
        references: {model: "Users", key: 'id'} }), 
      queryInterface.addColumn('shoppingLists', 'Store ID', 
      {type: Sequelize.INTEGER, allowNull: false, 
        references: {model: "Stores", key: 'id'} }) 
    ])
      
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
