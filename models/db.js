const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://ol-halytska:opAp16topf!_TT@cluster0-tzlmq.mongodb.net/wishListDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
require('./list');
