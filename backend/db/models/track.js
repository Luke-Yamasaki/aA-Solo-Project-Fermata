'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    user_Id: DataTypes.INTEGER,
    album_Id: DataTypes.INTEGER,
    genre_Id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.DECIMAL,
    likes: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};