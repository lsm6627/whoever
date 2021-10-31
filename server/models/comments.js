'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comments.belongsTo(models.posts, {
        foreignKey: { allowNull: false, name: 'id' }
      });
    }
  }
  comments.init(
    {
      content: DataTypes.STRING,
      password: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'comments'
    }
  );
  return comments;
};
