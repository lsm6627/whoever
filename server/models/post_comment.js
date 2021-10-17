'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Post_comment.belongsTo(models.Posts, {
        foreignKey: 'id',
        SourceKey: 'post_Id'
      });
      models.Post_comment.hasOne(models.Comment, {
        foreignKey: 'id',
        SourceKey: 'comment_Id'
      });
    }
  }
  Post_comment.init(
    {
      post_Id: DataTypes.INTEGER,
      comment_Id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Post_comment'
    }
  );
  return Post_comment;
};
