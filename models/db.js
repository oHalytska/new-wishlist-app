const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://<user name>:<password>@cluster0-tzlmq.mongodb.net/wishListDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
require('./list');
