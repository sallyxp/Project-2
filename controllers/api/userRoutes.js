const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// User will be directed to the signup page
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Please enter a username' });
            return;
        }
        const validPassword = await userData.checkPass(req.body.password);

        if (validPassword.length < 8) {
            res
                .status(400)
 
                .json({ message: 'Please enter a password of at least 8 characters. ' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            req.session.email = userData.email;
            req.session.logged_in = true;

            res.status(200).json(userData);
            res.json({ message: 'You are now logged in!' });      

        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// User login route, with check for valid password
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// User log out route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;