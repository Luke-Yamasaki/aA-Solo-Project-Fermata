'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    user_Id: DataTypes.INTEGER,
    track_Id: DataTypes.INTEGER,
    comment_Id: DataTypes.INTEGER,
    reply_Id: DataTypes.INTEGER,
    subthread_Id: DataTypes.INTEGER
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};