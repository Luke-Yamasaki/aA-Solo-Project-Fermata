'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      track_Id: {
        type: Sequelize.INTEGER,
        references: { model: "Tracks" }
      },
      comment_Id: {
        type: Sequelize.INTEGER,
        references: { model: "Comments" }
      },
      reply_Id: {
        type: Sequelize.INTEGER,
        references: { model: "Replies" }
      },
      subthread_Id: {
        type: Sequelize.INTEGER,
        references: { model: "Subthreads" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};
