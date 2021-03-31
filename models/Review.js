const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
      id: { //how the review will be identified 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: { //title of the post 
        type: DataTypes.STRING,
        allowNull: false
      },
      review_content: { //content of the post 
        type: DataTypes.TEXT,
        allowNull: true
      },
      rating: { //how good the restaurant is
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
      user_id: { //the id of the user who wrote the post 
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      restaurant_id: { //the id of the user who wrote the post 
        type: DataTypes.INTEGER,
        references: {
          model: 'restaurant',
          key: 'id'
        }
      }

    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'review'
    }
  );

  module.exports = Review;