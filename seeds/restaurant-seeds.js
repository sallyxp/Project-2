const { Restaurant } = require('../models');

const restaurantData = 

[
  {
    "name": "Carluccio's",
    "location": "Bull Ring"
  },
  {
    "name": "Tapas Revolution",
    "location": "Stephenson Street, Birmingham"
 },{
    "name": "Turtle Bay",
    "location": "John Bright Street, Birmingham"
 },{
    "name": "Tattu",
    "location": "Barwick Street, Birmingham"
 },{
    "name": "Pizza Express",
    "location": "The Citadel, Birmingham"
 },{
    "name": "Las Iguanas",
    "location": "Temple Street, Birmingham"
 }
]
const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;