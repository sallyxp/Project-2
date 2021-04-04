const router = require('express').Router();
const { Restaurant, User, Review, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Gets all reviews
router.get('/', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [
                // Get all comments from reviews
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['name'],
                    }
                },
                // Get the user name for the review
                {
                    model: User,
                    attributes: ['name'],
                },
                // Get the restaurant name of the review
                {
                    model: Restaurant,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//-----is this route going to change? 
// Gets reviews by id
router.get('/reviews/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id,{
            include: [
                // Get all comments from reviews
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['name'],
                    }
                },
                // Get the user name for the review
                {
                    model: User,
                    attributes: ['name'],
                },
                // Get the restaurant name of the review
                {
                    model: Restaurant,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const reviews = reviewData.get({ plain: true });

        // Pass serialized data and session flag into template
        res.render('reviews', {
            ...reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;