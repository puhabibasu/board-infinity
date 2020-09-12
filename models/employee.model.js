const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    taskame: {
        type: String,
        required: 'This field is required.'
    },
    taskdescription: {
        type: String,
        required: 'This field is required.'
    },
    duration: {
        type: String,
        required: 'This field is required.'
    }
    
});

mongoose.model('Employee', employeeSchema); 