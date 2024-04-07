'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE' //NOTE: IF WE DELETE PRODUCT TABLE THEN IT WILL AUTOMATICALLY DELETE CITYID COLUMNS
      })
    }
  }

  Review.init({
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    reviewerName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};