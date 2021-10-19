'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        id: 1,
        userId: 1,
        categoryId: 1,
        img: '../images/jyp.png',
        title: '여행가자!',
        content: '가나다라마바사,abcdefg',
        views: 1,
        suggestions: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 1,
        categoryId: 1,
        img: '',
        title: '비행기 예약부터 해야지',
        content: '가나다라마바사,abcdefg',
        views: 1,
        suggestions: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userId: 1,
        categoryId: 1,
        img: '',
        title: '코로나 언제 끝나니',
        content: '가나다라마바사,abcdefg',
        views: 1,
        suggestions: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
