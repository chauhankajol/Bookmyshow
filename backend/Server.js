const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect('mongodb://localhost:27017/bookmyshow')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(8080, () => console.log('Server running on http://localhost:8080'));
  })
  .catch(err => console.error(err));
