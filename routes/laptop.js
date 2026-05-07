const router = require('express').Router();
const { handleAddLaptop, handleGetActiveLaptops } = require('../controllers/laptop');

router.post('/addlaptop', handleAddLaptop);
router.get('/getActiveLaptops', handleGetActiveLaptops);

module.exports = router;