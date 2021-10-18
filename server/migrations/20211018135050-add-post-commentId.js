'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('posts', 'commentId', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addConstraint('posts', {
      fields: ['commentId'],
      type: 'foreign key',
      name: 'commentId',
      references: {
        table: 'comments',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('posts', 'commentId');
  }
};
