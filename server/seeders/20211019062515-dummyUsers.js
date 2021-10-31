'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        userId: 'HyesnSi',
        password: '1234',
        salt: 'hello world',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 'LSM',
        password: '1234',
        salt: 'hello world',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
