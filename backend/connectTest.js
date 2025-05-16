const mongoose = require('mongoose');

const url = 'mongodb+srv://dijkstra:dijkstra@cluster0.a2mgwp2.mongodb.net/FarmRental?retryWrites=true&w=majority';

mongoose.connect(url)
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection error:', err.message));
