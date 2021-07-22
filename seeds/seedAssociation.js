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
                pat[0].clinician = cli[1];
                pat.forEach( pa => cli[1].patients.push(pa));
                // exer.forEach( exe => pat[0].exercises.push(exe));
                pat[0].exercises.push(exer[0]);
                pat[0].exercises.push(exer[4]);
                pat[0].exercises.push(exer[3]);
                pat[0].exercises.push(exer[6]);
                // console.log('execrise: ' + exer)
                // console.log('patient: ' + pat[0])
                // console.log('clinician: ' + cli[1])
                // console.log('pat exercises: ' + pat[1].exercises)
                await cli[1].save().catch(err => console.log(err));
                await pat[0].save().catch(err => console.log(err));
                seeder.disconnect();
            },err => console.log(err))
        },err => console.log(err))
    },err => console.log(err))
});