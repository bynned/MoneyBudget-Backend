const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/transactions', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/transactions', async (req, res) => {
  const { amount, notes } = req.body;

  const newItem = new Item({
    amount,
    notes
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
