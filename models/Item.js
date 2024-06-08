const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  amount: Number,
  notes: String
});

module.exports = mongoose.model('item', ItemSchema);
