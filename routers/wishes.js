const express = require('express');
const router = express.Router();
const wishController = require('../controllers/wishController');

router.get('/', wishController.getWish);
router.post('/', wishController.postWish);
router.post('/delete', wishController.deleteWish);
module.exports = router;
