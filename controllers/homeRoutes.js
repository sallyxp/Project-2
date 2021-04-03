const router = require('express').Router();
const { Restaurant, User, Review, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Gets all reviews
router.get('/', async (req, res) => {
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
router.get('/reviews/:id', async (req, res) => {
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

// Gets dashboard page withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Gets login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to user dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// Gets signup page
router.get('/signup', (req, res) => {
    // If logged in the redirect to user dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

module.exports = router;