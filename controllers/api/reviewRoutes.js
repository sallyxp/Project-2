const router = require('express').Router();
const { Review, Restaurant, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a new review post from the dashboard page
router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete review from dashboard
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update review from dashboard
router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.update({
            name: req.body.name,
            description: req.body.description
        },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            });

        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Renders edit page for specific Review post
router.get('/edit/:id', withAuth, async (req, res) => {

    try {
        const editReviewData = await Review.findByPk(req.params.id);

        if (!editReviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        const edit = editReviewData.get({ plain: true });

        res.render('edit', {
            edit,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// Post comment on review
router.post('/:id', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            review_id: req.body.review_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;