'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subthread = sequelize.define('Subthread', {
    content: DataTypes.TEXT,
    user_Id: DataTypes.INTEGER,
    reply_Id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
  }, {});
  Subthread.associate = function(models) {
    // associations can be defined here
  };
  return Subthread;
};