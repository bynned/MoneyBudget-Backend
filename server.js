require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

const Item = require('./models/Item');

const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use('/api', transactionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
curl -X POST http://localhost:3030/api/transactions \
-H "Content-Type: application/json" \
-d '{"amount": 100, "notes": "This is a test note"}'
*/