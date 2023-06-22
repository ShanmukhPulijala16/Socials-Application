const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller.js');

console.log("Router loaded");

router.get('/', homeController.home);
router.use('/users', require('./users.js'));
router.use('/fun', require('./fun.js'));

// For any further routes, access from here
// router.use('/routerName', require('./routerFile));
// This is for reference

module.exports = router;