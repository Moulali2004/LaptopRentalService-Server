const router = require('express').Router();
const { handleAddLaptop, handleGetActiveLaptops, handleGetLaptopById } = require('../controllers/laptop');

router.post('/addlaptop', handleAddLaptop);
router.get('/getActiveLaptops', handleGetActiveLaptops);
router.get('/getLaptopById/:id', handleGetLaptopById);

module.exports = router;