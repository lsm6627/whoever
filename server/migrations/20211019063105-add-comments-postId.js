'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('comments', 'postId', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addConstraint('comments', {
      fields: ['postId'],
      type: 'foreign key',
      name: 'postId',
      references: {
        table: 'posts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('comments', 'postId');
  }
};
