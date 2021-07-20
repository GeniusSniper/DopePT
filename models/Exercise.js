const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    desription: {
        type: String, 
        required: true
    },
    urls: {
        type: Array,
        default: []
    }
    }, {
        timestamps: true
    }
)

module.exports = Exercise = mongoose.model('Exercise', ExerciseSchema);