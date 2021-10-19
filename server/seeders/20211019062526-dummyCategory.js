'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        content: '여행',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        content: '술',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        content: '맛집',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
