//this index shows locations for the api 'model' routes
const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');


// router.use('/comments', commentRoutes);
// router.use('/restaurants', restaurantRoutes);
// router.use('/reviews', reviewRoutes);
// router.use('/users', userRoutes);

module.exports = router;