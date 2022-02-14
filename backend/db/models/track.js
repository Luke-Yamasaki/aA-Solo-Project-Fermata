'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    user_Id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.belongsTo(models.User, { foreignKey: 'user_Id'});
  };

  return Track;
};
