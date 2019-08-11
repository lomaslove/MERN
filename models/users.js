const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  genre: {
    type: String,
     
  },
  age: {
    type: Number,
    min: 1,
    max: 120
  },

  email: {
    type: String,
    required: true
    
  }
     
});

module.exports = mongoose.model('users', userSchema);



