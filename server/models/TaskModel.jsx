const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {    
        type: String,
        required: true,
    },
    done: {    
        type: Boolean,
        required: true,
    },      
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;