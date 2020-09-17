const express = require('express');
const router = express.Router();
const isLogged = require('../middleware/auth').isLogged;

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    name: req.user.displayName,
    avatar: req.user._json.picture,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('profileSettings');
});

module.exports = router;
