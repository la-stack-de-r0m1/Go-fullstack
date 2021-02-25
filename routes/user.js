const express = require('express');
const router = express.Router();
const userCtr = require('../controllers/user');

router.post('/signup', userCtr.login);
router.post('/login', userCtr.login);

module.exports = router;