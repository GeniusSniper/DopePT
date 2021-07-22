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
                pat[1].clinician = cli[0];
                pat.forEach( pa => cli[0].patients.push(pa));
                // exer.forEach( exe => pat[1].exercises.push(exe));
                pat[1].exercises.push(exer[1]);
                pat[1].exercises.push(exer[4]);
                pat[1].exercises.push(exer[3]);
                pat[1].exercises.push(exer[6]);
                // console.log('execrise: ' + exer)
                // console.log('patient: ' + pat[1])
                // console.log('clinician: ' + cli[0])
                // console.log('pat exercises: ' + pat[1].exercises)
                await cli[0].save().catch(err => console.log(err));
                await pat[1].save().catch(err => console.log(err));
                seeder.disconnect();
            },err => console.log(err))
        },err => console.log(err))
    },err => console.log(err))
});z