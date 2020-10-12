'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('todo', // set type & name table
      { 
        id:{
          type: Sequelize.INTEGER, // datatype
          primaryKey:true, // primary
          allowNull:false, // allow null
          unique:true,
          autoIncrement:true
        },
        nama:{
          type: Sequelize.STRING,
          allowNull:false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('todo');
  }
};
