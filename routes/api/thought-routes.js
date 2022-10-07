const router = require('express').Router();

// import thought controller functions
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/toughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

  // /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;