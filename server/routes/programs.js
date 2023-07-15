const express = require('express');
const router = express.Router();


const {isSignedIn} = require('../controllers/auth');
const {list, add} = require('../controllers/programs');





router.post('/add', isSignedIn, add)
router.get('/list', list)

module.exports = router;