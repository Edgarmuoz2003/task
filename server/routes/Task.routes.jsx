const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller.jsx');

router.post('/create', taskCtrl.createTask);

module.exports = router;

