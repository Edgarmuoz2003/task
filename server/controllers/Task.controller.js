const TaskModel = require('../models/TaskModel');
const MyTask = require('../models/TaskModel');
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

taskCtrl.getTasks = async (req, res) => {
    try {
        const data = await MyTask.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener las tareas' });
    }
}

taskCtrl.deleteTask = async (req, res) => {
    try {
        await MyTask.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar la tarea' });
    }
};

taskCtrl.updateTask = async (req, res) => {
    const id = req.params.id;
    const done = req.body.done;

    try {
        await MyTask.findByIdAndUpdate(id, { done });
        res.status(200).json({ message: 'Tarea actualizada' });
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la tarea' });
    }
};

module.exports = taskCtrl;

