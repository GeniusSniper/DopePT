const BaseUser = require('./BaseUser');
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

let PatientSchema = new BaseUser.BaseUserSchema({
    clinician: { type: Schema.Types.ObjectId, ref: 'Clinician' },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise'}],
})

BaseUser.User.discriminator('Patient', PatientSchema);

const Patient = mongoose.model('Patient');
module.exports = Patient;