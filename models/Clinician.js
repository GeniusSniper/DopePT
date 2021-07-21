const BaseUser = require('./BaseUser');
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

let ClinicianSchema = new BaseUser.BaseUserSchema({
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }],
})

BaseUser.User.discriminator('Clinician', ClinicianSchema);

const Clinician = mongoose.model('Clinician');
module.exports = Clinician;