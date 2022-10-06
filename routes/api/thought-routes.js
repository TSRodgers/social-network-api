const router = require('express').Router();

// import thought controller functions
const {

} = require('../../controllers/thought-controller')

// /api/thoughts
router
  .route('/');

// /api/thoughts/:id
router
  .route('/:id');

// /api/thoughts/:userId
router
  .route('/:userId');

// /api/toughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions');

  // /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId');

module.exports = router;