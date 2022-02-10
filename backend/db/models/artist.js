'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    user_Id: DataTypes.INTEGER,
    follower_cout: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
  };
  return Artist;
};