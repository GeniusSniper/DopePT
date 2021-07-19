import * as BaseUser from './BaseUser'

const ClinitianSchema = new BaseUser.BaseUserSchema({
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }],
})

BaseUser.User.discriminator('Clinitian', ClinitianSchema)