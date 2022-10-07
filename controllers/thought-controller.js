const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts 
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get a thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .select('-__v')
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: 'No thought found with this id.'
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: _id } },
        { new: true }
      );
    })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({
          message: 'No user found with this id.'
        });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },
  // update a thought
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({
          message: 'No thought found with this id.'
        });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },
  // remove a thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({
          message: 'No thought found with this id.'
        });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },
  // create a new reaction 
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body }},
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({
          message: 'No thought found with this id.'
        });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  },
  // remove a reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true, runValidators: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({
          message: 'No thought found with this id.'
        });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
  }
};

module.exports = thoughtController;