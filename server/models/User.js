const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counter = new Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', counter);


const user = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

user.pre('save', async function (next) {
  const doc = this;
  if (doc.isNew) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        'user_counter', // The identifier for the counter document
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      );
      doc._id = counter.sequence_value;
    } catch (error) {
      return next(error);
    }
  }
  return next();
});


const User = mongoose.model('User', user);

module.exports = User;
  
