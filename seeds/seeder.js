let seeder = require('mongoose-seed');
const keys = require('../config/keys');
// const bcrypt = require('bcryptjs');

// const setPassword = async () => {
//     let password = '123456';
//     return await bcrypt.genSalt(10, async (err, salt) => {
//         return await bcrypt.hash(password, salt, (err, hash) => {
//             if(err) throw err;
//             password = hash;
//             console.log('bcrypt hash: ' + password)
//             return password
//         })
//         // console.log('before hash: ' + password)
//     })
//     // console.log('after hash: ' + password)
//     // return password
// }
// console.log((await setPassword()))

const data = [
    {
        'model': 'Exercise',
        'documents': [{
                'title': 'title1',
                'description': 'something',
            },{
                'title': 'title2',
                'description': 'something',
            },{
                'title': 'title3',
                'description': 'something',
            },{
                'title': 'title4',
                'description': 'something',
            },{
                'title': 'title5',
                'description': 'something',
            },{
                'title': 'title6',
                'description': 'something',
            },{
                'title': 'title7',
                'description': 'something',
            },{
                'title': 'title8',
                'description': 'something',
            },{
                'title': 'title9',
                'description': 'something',
            },{
                'title': 'title10',
                'description': 'something',
            },{
                'title': 'title11',
                'description': 'something',
        }]
    },{
        'model': 'Clinician',
        'documents': [{
            'handle': 'clinician',
            'email': 'clinician@email.com',
            'password': '$2a$10$xYpgufwbkO71ZxZAy8MTcu7JyhLrTp2duCqu/2qZT4mSOYazn0qva',
            'isClinician': true
        }]
    },{
        'model': 'Patient',
        'documents': [{
            'handle': 'patient',
            'email': 'patient@email.com',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        }]
    }
];

const modelsPath = ['models/Exercise.js', 'models/Clinician.js', 'models/Patient.js'];
const models = ['Exercise', 'Clinician', 'Patient'];

seeder.connect(keys.mongoURI,() => {
    seeder.loadModels(modelsPath);
    seeder.clearModels(models, () => {
        seeder.populateModels(data, (err, suc) => {
            err ? console.log('err: ' + err) : console.log('success: ' + suc)
            seeder.disconnect();
        })
    })
})
