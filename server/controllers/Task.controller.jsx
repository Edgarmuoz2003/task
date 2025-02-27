const MyTask = require('../models/TaskModel.jsx');
const taskCtrl = {};

taskCtrl.createTask = async (req, res) => {
    const { task, done } = req.body;

    try {
        const myTask = new MyTask({
            task,
            done
        });
        await myTask.save();
        res.status(200).json({ message: 'Tarea guardada' });
    } catch (error) {
        res.status(400).json({ message: 'Error al guardar la tarea' });
    }
}

module.exports = taskCtrl;

