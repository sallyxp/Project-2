const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//     Comment.findAll({})
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


router.post('/:id', withAuth, async (req, res) => {
    console.log(req.body);
    console.log(req.session.user_id);
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: parseInt(req.body.post_id),
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbCommentData => {
//             if (!dbCommentData) {
//                 res.status(404).json({ message: 'No comment found with this id' });
//                 return;
//             }
//             res.json(dbCommentData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
