const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
  reactions: [ String ]
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