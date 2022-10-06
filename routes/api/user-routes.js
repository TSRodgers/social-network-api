const router = require('express').Router();

// import controller functions 
const {

} = require('../../controllers/user-controller');

// /api/users
router
  .route('/');

// /api/users/:id
router  
  .route('/users/:id');

// api/users/:userId/friends/:friendId
router
  .route('/users/:userId/friends/:friendId');

module.exports = router;
