'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('posts', 'categoryId', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addConstraint('posts', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'categoryId',
      references: {
        table: 'categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('posts', 'categoryId');
  }
};
