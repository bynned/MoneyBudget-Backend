const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  amount: Number,
  notes: String,
  date: { type: Date, required: true }
});

module.exports = mongoose.model('dailytransactions', ItemSchema);
