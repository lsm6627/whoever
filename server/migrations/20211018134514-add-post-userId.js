'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('posts', 'userId', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addConstraint('posts', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('posts', 'userId');
  }
};
