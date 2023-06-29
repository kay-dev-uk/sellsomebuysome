const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counter = new Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 1 }
});

const itemCounter = mongoose.model('itemCounter', counter);


const item = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
//   creator_id: { type: Number, required: true }, //Foreign Key
  price: { type: Number, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true }, //Selection
});

item.pre('save', async function (next) {
  const doc = this;
  if (doc.isNew) {
    try {
      const counter = await itemCounter.findByIdAndUpdate(
        'item_counter',
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


const Item = mongoose.model('Item', item);

module.exports = Item;
