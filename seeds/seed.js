const seedRestaurants = require('./restaurant-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedRestaurants();
    console.log('\n----- RESTAURANTS SEEDED -----\n');

  //await seedReviews();
  //  console.log('\n----- COMMENTS SEEDED -----\n');
  //await seedComments();
  //  console.log('\n----- COMMENTS SEEDED -----\n');  

  process.exit(0);
};

seedAll();