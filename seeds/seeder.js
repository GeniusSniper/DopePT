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
                'title': 'Standing Bicep Curl',
                'description': 'Bicep curl performed for bicep muscles in standing with either weight or bands',
                'instructions': 'Stand up straight with arms resting at your sides. With elbows at your sides, bend at the elbow until angle is just beyond 90 degrees. Then slowly return back to starting position',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/bicep.jpg',
            },{
                'title': 'Body Weight Squat',
                'description': 'Body weight squat performed for quadriceps and glutes. No equipment needed',
                'instructions': 'Start by standing with your feet about shoulder width apart. Start the movement at the hips, driving them backward like you are going to sit down. Let your knees natually bend with your hips until your thighs are about parallel with the floor. Use your glute muscles to drive yourself back to the starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/squat.jpg',
            },{
                'title': 'Resistance Band Rows',
                'description': 'Rows performed for rhomboid muscles in standing/sitting with resistance bands',
                'instructions': 'Start in standing or sitting with the resistance band anchored level to your naval. Grab seperate ends of the band in each hand with your arms out in front of you. With back straight, shoulders relaxed down and back, and in a slight squat, pull your elbows to your sides using the muscles between your shoulder blades. Relax and slowly return to the starting postition.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/rows.jpg',
            },
            {
                'title': 'Resistance Band Shoulder Extention',
                'description': 'Shoulder extentions performed for lat muscles in standing/sitting with resistance bands',
                'instructions': 'Start in standing or sitting with the resistance band anchored level to your naval. Grab seperate ends of the band in each hand with your arms out in front of you. With back straight, shoulders relaxed down and back, and in a slight squat, pull your hands to your pockets using your lats (back muscles under your arms). Relax and slowly return to the starting postition.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/shoulder_ext.jpg',
            },
            {
                'title': 'Resistance band Shoulder External Rotation',
                'description': 'Shoulder external rotation performed in standing/sitting with resistance bands',
                'instructions': 'Start in standing or sitting with the resistance band anchored level to your naval. Grab one end of the resistance band with the working arm and turn your whole body 90 degrees in the direction of the working arm. Start with the elbow bent at 90 degrees, shoulder relaxed down and back, and forarm across your stomach. Rotate at the shoulder about 90 degrees until your forarm is perpendicular to your body, keeping your elbow at your side. You may wish to hold a towel underneath your arm to prevent your elbow from lifting away from you. Relax and return to starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/shoulder_ER.png',
            },
            {
                'title': 'Supine Hip Bridges',
                'description': 'Hip bridges performed for glute muscles in supine on firm surface. No weight required.',
                'instructions': 'Begin in in hooklying postion. Brace abdominal muscles by drawing belly button in and use your glutes to lift your hips off of the ground until your hips are straight. Slowly return back to starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/bridges.jpg',
            },
            {
                'title': 'Sidelying Clams',
                'description': 'Clamshells for hip rotators performed in sidelying',
                'instructions': 'Being in hooklying and roll 90 degrees onto one side. Keeping heels together, bring knees apart focusing on the muscles on the side of your butt. Stop if pelvis begins to rotate and return knees together to starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/clams.jpg',
            },
            {
                'title': 'Shoulder Protraction',
                'description': 'Shoulder protraction  for scapular stabilizers performed against a wall or in a pushup position',
                'instructions': 'Begin either standing or in a pushup position with arms straight out 90 degrees in front of you. Place hands on surface and put your weight through them. Push your shoulder forward away from your body using muscles that are just under your armpit. This motion will be small. Relax and return to starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/shoulder_prot.jpg',
            },
            {
                'title': 'Bench Press',
                'description': 'Bench press for chest muscles,  performed in supine on a firm surface with either dumbbells or a weighted pole.',
                'instructions': 'Begin by laying supine in either hooklying on a firm surface or feet planted on the floor while laying supine on a bench. Arms will be 90 degrees to your sides with elbows flexed 90 degrees, hands towards the ceiling. Press weight towards the ceiling using chest muscles until arms are straight, keeping abdominals braced. Relax and return to starting position.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/bench.jpg',
            },
            {
                'title': 'Resistance Band Tricep Extentions',
                'description': 'Tricep extentions  for tricep muscles performed with a resistance band in standing or sitting.',
                'instructions': 'Start in standing or sitting with the resistance band anchored level to your naval. Grab seperate ends of the band in each hand with your elbows bent 90 degrees. With back straight, shoulders relaxed down and back, and in a slight squat, bring your hands to your pockets by strightening your elbows using your triceps. Relax and slowly return to the starting postition.',
                'urls': 'https://dope-pt2-seed.s3.amazonaws.com/tricep.jpg',
            },
            ]
    },{
        'model': 'Clinician',
        'documents': [{
            'handle': 'Clinician',
            'email': 'clinician@email.com',
            'password': '$2a$10$xYpgufwbkO71ZxZAy8MTcu7JyhLrTp2duCqu/2qZT4mSOYazn0qva',
            'phone': '5555555555',
            'isClinician': true
        },{
            'handle': 'Tyler',
            'email': 'tyler@email.com',
            'password': '$2a$10$xYpgufwbkO71ZxZAy8MTcu7JyhLrTp2duCqu/2qZT4mSOYazn0qva',
            'phone': '5555555555',
            'isClinician': true
        }]
    },{
        'model': 'Patient',
        'documents': [{
            'handle': 'Patient',
            'email': 'patient@email.com',
            'phone': '5555555555',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'Patient 1',
            'email': 'patient1@email.com',
            'phone': '5555555555',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'Patient 2',
            'email': 'patient2@email.com',
            'phone': '5555555555',
            'password': '$2a$10$sDP1r7u0L6wF9y6d7tBN5u7v16Ei5VaPd7MQ3l.mbXTNUItrfbWjy'
        },{
            'handle': 'Ti',
            'email': 'ti@ti.ti',
            'phone': '5555555555',
            'password': '$2a$10$MRmmJKmZFskjqy7JrxnM0.G/zNctD2Sv6e06KNnUhtVEergufNUwK'
        }]
    }
];

const modelsPath = ['models/Exercise.js', 'models/Clinician.js', 'models/Patient.js'];
const models = ['Exercise', 'Clinician', 'Patient'];

seeder.connect(keys.mongoURI.toString(),() => {
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

