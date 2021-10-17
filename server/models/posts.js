'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Posts.hasOne(models.Post_comment, {
        foreignKey: 'post_Id',
        SourceKey: 'id'
      });
      models.Posts.hasOne(models.Users, {
        foreignKey: 'id',
        SourceKey: 'userId'
      });
      models.Posts.hasOne(models.category, {
        foreignKey: 'id',
        SourceKey: 'categoryId'
      });
    }
  }
  Posts.init(
    {
      userId: DataTypes.INTEGER,
      img: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      views: DataTypes.INTEGER,
      suggestions: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Posts'
    }
  );
  return Posts;
};
