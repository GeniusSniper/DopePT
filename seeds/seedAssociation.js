let seeder = require('mongoose-seed');
const keys = require('../config/keys');
const Exercise = require('../models/Exercise');
// import Exercise from ('../models/Exercise');
const Clinician = require('../models/Clinician');
const Patient = require('../models/Patient');

seeder.connect(keys.mongoURI,() => {
    Exercise.find().then( exer => { 
        Patient.find().then( pat => {
            Clinician.find().then( async (cli) => {
                pat.forEach( pa => cli[1].patients.push(pa));
                exer.forEach( exe => pat[1].exercises.push(exe));
                cli[1].patients.push(pat[1]);
                // console.log('execrise: ' + exer)
                // console.log('patient: ' + pat[1])
                // console.log('clinician: ' + cli[1])
                // console.log('pat exercises: ' + pat[1].exercises)
                await cli[1].save().catch(err => console.log(err));
                await pat[1].save().catch(err => console.log(err));
                seeder.disconnect();
            },err => console.log(err))
        },err => console.log(err))
    },err => console.log(err))
});