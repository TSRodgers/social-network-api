const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema ({
  reactionId: {
    type: Schema.Types.ObjectId,
    // sets new ObjectId by default
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
},
{
  toJSON: {
    getters: true
  }
});

const ThoughtScehma = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ ReactionSchema ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtScehma.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtScehma);

module.exports = Thought;