'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.Track, { foreignKey: 'genre_Id' });
  };
  return Genre;
};
