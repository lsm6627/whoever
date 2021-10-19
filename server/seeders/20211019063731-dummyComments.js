'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        id: 1,
        postId: 1,
        content: '너무 재미있어요!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        postId: 2,
        content: '안녕 디지몬!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        postId: 2,
        content: '안녕 포켓몬!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
