let seeder = require('mongoose-seed');
const keys = require('../config/keys');

// const bcrypt = require('bcryptjs');

// const setPassword = async () => {
//     let password = '123456';
//     bcrypt.genSalt(10,  async (err, salt) => {
//         bcrypt.hash(password, salt, async (err, hash) => {
//             password = await hash;
//             console.log('bcrypt hash: ' + password)
//         })
//         password = await password
//         console.log('before hash: ' +  password)
//     })
//     password = await password
//     console.log('after hash: ' + password)
//     return password
// }
// console.log((await setPassword()))

const data = [
    {
        'model': 'Exercise',
        'documents': [{
                'title': 'title1',
                'description': 'something',
                'instructions': '',
                'urls': [],
            },{
                'title': 'title1',
                'description': 'something',
                'instructions': '',
                'urls': [],
            },{
                'title': 'title1',
                'description': 'something',
                'instructions': '',
                'urls': [],
            },{
                'title': 'title1',
                'description': 'something',
                'instructions': '',
                'urls': [],
            },]
    },{
        'model': 'Clinician',
        'documents': [{
            'handle': 'clinician',
            'email': 'clinician@email.com',
            'password': '$2a$10$xYpgufwbkO71ZxZAy8MTcu7JyhLrTp2duCqu/2qZT4mSOYazn0qva',
            'isClinician': true
        },{
            'handle': 'tyler',
            'email': 'tyler@email.com',
            'password': '$2a$10$xYpgufwbkO71ZxZAy8MTcu7JyhLrTp2duCqu/2qZT4mSOYazn0qva',
            'isClinician': true
        }]
    },{
        'model': 'Patient',
        'documents': [{
            'handle': 'patient',
            'email': 'patient@email.com',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'patient1',
            'email': 'patient1@email.com',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'patient2',
            'email': 'patient2@email.com',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'ti',
            'email': 'ti@ti.ti',
            'password': '$2a$10$MRmmJKmZFskjqy7JrxnM0.G/zNctD2Sv6e06KNnUhtVEergufNUwK'
        }]
    }
];

const modelsPath = ['models/Exercise.js', 'models/Clinician.js', 'models/Patient.js'];
const models = ['Exercise', 'Clinician', 'Patient'];

seeder.connect(keys.mongoURI,() => {
    seeder.loadModels(modelsPath);
    seeder.clearModels(models, () => {
        seeder.populateModels(data, (err, suc) => {
            seeder.disconnect();
        });
    });
});

// function seedassoiciation(){
//     let allExercises, firstDoctor, allPatient;
//     Exercise.find().then( exercises => { 
//         allExercises = exercises 
//         console.log('exercises' + exercises)
//         console.log(allExercises)
//     });
//     console.log(allExercises)
// }

