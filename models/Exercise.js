const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    instructions:{
        type: String
    },
    urls: {
        type: Array,
        default: []
    },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    }, {
        timestamps: true
    }
)

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;