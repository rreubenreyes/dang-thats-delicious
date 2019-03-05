const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('hello.pug');
});

module.exports = router;
