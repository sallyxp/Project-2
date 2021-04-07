const Restaurant = require('./Restaurant');
const User = require('./User');
const Comment = require('./Comment');
const Review = require('./Review');


//create associations
//A user has many reviews, a restaurant can have many reviews, but a comment can only have one user.

//create associations
User.hasMany(Review, { //one to many 
    foreignKey: 'user_id'
});

Review.belongsTo(User, { //one to one 
    foreignKey: 'user_id',
});

User.hasMany(Comment, { //one to many
    foreignKey: 'user_id'
});

Comment.belongsTo(User, { //one to one 
    foreignKey: 'user_id'
});

Restaurant.hasMany(Review, { //one to many 
    foreignKey: 'restaurant_id'
});

//testing a change here from belongsto to hasone
Review.belongsTo(Restaurant, {//one to many
    foreignKey: 'restaurant_id'
});

Review.hasMany(Comment, { //one to many 
    foreignKey: 'review_id'
});


//testing a change here from belongsto to hasone
Comment.belongsTo(Review, {//one to many
    foreignKey: 'review_id'
});

module.exports = { User, Restaurant, Review, Comment };