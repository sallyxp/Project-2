const { User } = require('../models');

const userData = 

[
  {
     "name": "Gordon",
     "email": "gordon@email.com",
      "password": "Password123"
  },
  {
    "username": "Jamie", //id 2
    "email": "jamie@email.com",
    "password": "Password123"
  },
  {
    "username": "heston", //id 3
      "email": "heston@email.com",
      "password": "Password123"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;