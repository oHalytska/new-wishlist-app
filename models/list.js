const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishList = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  }
});

mongoose.model('Wish', wishList);
