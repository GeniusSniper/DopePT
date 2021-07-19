import * as BaseUser from './BaseUser'

const PatientSchema = new BaseUser.BaseUserSchema({
    clinician: { type: Schema.Types.ObjectId, ref: 'Clinitian' },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise'}],
})

const Patient = BaseUser.User.discriminator('Patient', PatientSchema)

module.exports = Patient;