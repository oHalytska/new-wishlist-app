const mongoose = require('mongoose');
const Wish = mongoose.model('Wish');

exports.getWish = (req, res) => {
  Wish.find((error, wishes) => {
    if (!error) {
      res.render('index', {
        newListItems: wishes
      });
    } else {
      console.log('Failed');
    }
  });
};

// let options = {
//       weekday: 'long',
//       day: 'numeric',
//       month: 'long'
//   }
//   let day = today.toLocaleDateString("en-US", options);

exports.postWish = (req, res) => {
  let userInput = req.body.newItem;
  let dateInput = req.body.dateItem;
  let newWish = new Wish();
  newWish.title = userInput;
  newWish.date = dateInput;
  newWish.save((error, response) => {
    if (!error) {
      res.redirect('/');
    } else {
      console.log(error);
    }
  });
};

exports.deleteWish = (req, res) => {
  console.log(req.body.button);
  const checkedItem = req.body.button;
  Wish.findByIdAndRemove(checkedItem, function (error) {
    if (!error) {
      console.log('Deleted');
      res.redirect('/');
    }
  });
};
