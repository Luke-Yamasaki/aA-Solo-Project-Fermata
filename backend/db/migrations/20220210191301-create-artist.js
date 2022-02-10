'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      image_url: {
        type: Sequelize.STRING
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      follower_cout: {
        type: Sequelize.INTEGER
      },
      track_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Tracks" }
      },
      album_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Albums" }
      },
      likes_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Likes" }
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
    return queryInterface.dropTable('Artists');
  }
};
