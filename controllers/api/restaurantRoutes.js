//post routes including with auth for post editing
const router = require('express').Router();
const { Restaurant } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//GET all restaurants with reviews
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'name',
            'location'
            
        ],
      order: [['name', 'location']],
      include: [
        {
          model: Review,
          attributes: ['id', 'title', 'review_content', 'rating', 'date_created', 'user_id', 'restaurant_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        
      ]
    })
      .then(RestaurantData => res.json(RestaurantData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//GET restaurant by id 
router.get('/:id', (req, res) => {
    Restaurant.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'location'
      ],
      include: [
        {
          model: Review,
          attributes: ['id', 'title', 'review_content', 'rating', 'date_created', 'user_id', 'restaurant_id'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'date_created', 'user_id', 'review_id'],
          
        }
      ]
    })
      .then(RestaurantData => {
        if (!RestaurantData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(RestaurantData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//POST post, authenticated users only 
router.post('/', withAuth, (req, res) => {
    Restaurant.create({
      name: req.body.name,
      location: req.body.location,
      user_id: req.session.user_id
    })
      .then(RestaurantData => res.json(RestaurantData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//PUT post by id, authenticated users only 
router.put('/:id', withAuth, (req, res) => {
    Restaurant.update({
        name: req.body.name,
        location: req.body.location
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(RestaurantData => {
        if (!RestaurantData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(RestaurantData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//DELETE post by id, authenticated users only 
router.delete('/:id', withAuth, (req, res) => {
    Restaurant.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(RestaurantData => {
        if (!RestaurantData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(RestaurantData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router;