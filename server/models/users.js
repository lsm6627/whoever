'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Users.belongsTo(models.Posts, {
        foreignKey: 'userId',
        SourceKey: 'id'
      });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Users'
    }
  );
  return Users;
};
