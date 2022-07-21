const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);

router.get('/login', mainController.login);
router.post('/login', mainController.loginProcess);

router.get('/logout', mainController.logout);

router.get('/register', mainController.register);
router.post('/register', mainController.registerProcess);

router.get('/profile', mainController.profile);

module.exports = router;