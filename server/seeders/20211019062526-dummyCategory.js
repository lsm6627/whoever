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
      },
      {
        id: 4,
        content: '낚시',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        content: '노래',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        content: '코딩',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
