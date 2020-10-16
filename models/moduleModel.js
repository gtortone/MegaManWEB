const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  number: {
    type: Number,
    required: [true, 'A channel must have a number'],
  },
  name: {
    type: String,
    required: [true, 'A channel must have a name'],
  },
  energyThreshold: {
    type: Number,
    default: 0,
  },
  timeThreshold: {
    type: Number,
    default: 0,
  },
  polarity: {
    type: Number,
    default: 0,
  },
  shaping: {
    type: Number,
    default: 0,
  },
});

const moduleSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A module must have a name'],
    unique: true,
  },
  multiplicityThreshold: {
    type: Number,
    default: 0,
  },
  tacRange: {
    type: Number,
    default: 0,
  },
  channels: [channelSchema],
});

moduleSchema.pre('save', function (next) {
  for (i = 0; i < 16; i++) {
    this.channels.push({ number: i, name: `Channel ${i}` });
  }
  next();
});

// bind schema 'moduleSchema' with collection 'configs' - 's' is automatically added
const Module = mongoose.model('config', moduleSchema);

module.exports = Module;
