'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users"}
      },
      genre_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Genres"}
      },
      image_url: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      ratings: {
        type: Sequelize.INTEGER,
        references: { model: "Reviews" }
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
    return queryInterface.dropTable('Albums');
  }
};
