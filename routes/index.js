const express = require('express');
const store = require('../controllers/store');

const router = express.Router();

router.get('/', store.homePage);
router.get('/add', store.addStore);
router.post('/add', store.createStore);
router.get('/update', store.updateStore);
router.get('/delete', store.deleteStore);

module.exports = router;
