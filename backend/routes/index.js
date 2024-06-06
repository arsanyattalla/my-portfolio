const express = require('express');
const router = express.Router();

router.get('/aboutme', (req, res) => {
  res.redirect('/aboutme');
});

router.get('/experience', (req, res) => {
  res.redirect('/experience');
});

module.exports = router;
