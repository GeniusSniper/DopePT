const BaseUser = require('./BaseUser');
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

let ClinitianSchema = new BaseUser.BaseUserSchema({
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }],
})

BaseUser.User.discriminator('Clinitian', ClinitianSchema);

const Clinitian = mongoose.model('Clinitian');
module.exports = Clinitian;