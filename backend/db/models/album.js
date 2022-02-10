'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    user_Id: DataTypes.INTEGER,
    genre_Id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    url: DataTypes.STRING,
    ratings: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};