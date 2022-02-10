'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Followers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artist_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users"}
      },
      track_Id: {
        type: Sequelize.INTEGER
      },
      comment_Id: {
        type: Sequelize.INTEGER
      },
      reply_Id: {
        type: Sequelize.INTEGER
      },
      subthread_Id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Followers');
  }
};
