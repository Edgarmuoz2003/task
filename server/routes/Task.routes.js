const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/Task.controller');

router.post('/create', taskCtrl.createTask);
router.get('/get', taskCtrl.getTasks);
router.delete('/delete/:id', taskCtrl.deleteTask);
router.patch('/update/:id', taskCtrl.updateTask);

module.exports = router;

