// routes/test.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/', testController.testMCPServer);

module.exports = router;
