const express = require('express');

/* resources */
const store = require('../controllers/store');

/* middlewares */
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

/* Store */
router.get('/', store.homePage);
router.get('/add', store.addStore);
router.post('/add', catchErrors(store.createStore));
router.get('/update', store.updateStore);
router.get('/delete', store.deleteStore);

module.exports = router;
