const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

require('./models/db');

const mongoose = require('mongoose');
const wishRouter = require('./routers/wishes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(wishRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
