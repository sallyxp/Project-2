const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Restaurant model
class Restaurant extends Model {}

// create fields/columns for Restaurant model
Restaurant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'restaurant'
    }
  );

  module.exports = Restaurant;