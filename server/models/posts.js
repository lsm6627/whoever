'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.posts.belongsTo(models.users, {
        foreignKey: { allowNull: false, name: 'id' }
      });
      models.posts.belongsTo(models.category, {
        foreignKey: { allowNull: false, name: 'id' }
      });
      models.posts.hasMany(models.comments);
    }
  }
  posts.init(
    {
      img: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      views: DataTypes.INTEGER,
      suggestions: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'posts'
    }
  );
  return posts;
};
