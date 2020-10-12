'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('todo', [
     {
      nama: 'Ngoding',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nama: 'Makan',
      created_at: new Date,
      updated_at: new Date()
    },
    {
      nama: 'Tidur',
      created_at: new Date,
      updated_at: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todo', null, {});
  }
};
