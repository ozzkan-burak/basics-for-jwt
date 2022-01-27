
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');
const {login, dashboard} = require('../controllers/main');

router.get('/dashboard').get(authMiddleware, dashboard);
router.post('/login', login);

module.exports = router;