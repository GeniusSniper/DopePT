let seeder = require('mongoose-seed');
const keys = require('../config/keys');
const Exercise = require('../models/Exercise');
// import Exercise from ('../models/Exercise');
const Clinician = require('../models/Clinician');
const Patient = require('../models/Patient');

seeder.connect(keys.mongoURI.toString(),() => {
    Exercise.find().then( exer => { 
        Patient.find().then( pat => {
            Clinician.find().then( async (cli) => {
                pat[1].clinician = cli[0];
                pat[0].clinician = cli[1];
                pat.forEach( pa => cli[0].patients.push(pa));
                pat.forEach( pa => cli[1].patients.push(pa));
                pat[1].exercises.push(exer[1]);
                pat[0].exercises.push(exer[2]);
                pat[1].exercises.push(exer[4]);
                pat[0].exercises.push(exer[4]);
                pat[1].exercises.push(exer[3]);
                pat[0].exercises.push(exer[8]);
                pat[1].exercises.push(exer[6]);
                pat[1].exercises.push(exer[5]);
                await cli[0].save().catch(err => console.log(err));
                await cli[1].save().catch(err => console.log(err));
                await pat[0].save().catch(err => console.log(err));
                await pat[1].save().catch(err => console.log(err));
                seeder.disconnect();
            },err => console.log(err))
        },err => console.log(err))
    },err => console.log(err))
});