'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('players', 'team_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'teams', // Table name in the database
        key: 'id', // Column in 'teams' that 'teamId' refers to
      },
      onDelete: 'SET NULL', // If team is deleted, set teamId to null
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('players', 'team_id');
  },
};
