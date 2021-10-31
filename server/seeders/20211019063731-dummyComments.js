'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        id: 1,
        content: '너무 재미있어요!',
        password: 1234,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        content: '안녕 디지몬!',
        password: 1234,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        content: '안녕 포켓몬!',
        password: 1234,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        content: '안녕 포켓몬!',
        password: 1234,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
