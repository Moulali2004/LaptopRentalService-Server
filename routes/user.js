const router = require('express').Router();
const { handleUserSignup, handleGetUsers, handleUserLogin } = require('../controllers/user');

router.post('/register', handleUserSignup);
router.get('/users', handleGetUsers);
router.post('/login', handleUserLogin);

module.exports = router;