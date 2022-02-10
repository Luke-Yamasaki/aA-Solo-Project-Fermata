'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    user_Id: DataTypes.INTEGER,
    track_Id: DataTypes.INTEGER,
    comment_Id: DataTypes.INTEGER,
    reply_Id: DataTypes.INTEGER,
    subthread_Id: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};