const { Model, DataTypes, Sequelize } = require('sequelize');

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
      // FOR IMAGE UPLOAD
      img_url: {
        type: DataTypes.STRING,
        defaultValue: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault-920x518.jpg",
        allowNull: true,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false,
      underscored: true,
      modelName: 'restaurant'
    }
  );

  module.exports = Restaurant;