'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.hasMany(models.posts);
    }
  }
  users.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.INTEGER,
      salt: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'users'
    }
  );
  return users;
};
