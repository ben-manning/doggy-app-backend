const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  photoUrl: String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog