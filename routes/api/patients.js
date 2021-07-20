const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Patient = require('../../models/Patient');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
// const Exercise = require("../../models/Exercise");

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the patients route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.patient.id,
      handle: req.patient.handle,
      email: req.patient.email
    });
  })

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

    // Check to make sure nobody has already registered with a duplicate email
    Patient.findOne({ email: req.body.email })
      .then(patient => {
        if (patient) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A patient has already registered with this address"})
        } else {
          // Otherwise create a new patient
          const newPatient = new Patient({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
          })

          bcrypt.genSalt(10, (err, salt) => {
            console.log('userbcrpt: ' + err);
            bcrypt.hash(newPatient.password, salt, (err, hash) => {
              if (err) throw err;
              newPatient.password = hash;
              newPatient.save()
                .then(patient => res.json(patient))
                .catch(err => console.log(err));
            })
          })
        }
      })
  })


  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    console.log(errors);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
  
    Patient.findOne({email})
      .then(patient => {
        if (!patient) {
          return res.status(404).json({email: 'This patient does not exist'});
        }
  
        bcrypt.compare(password, patient.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {id: patient.id, name: patient.name};

            jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
              });
            } else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
      })
  })

  //for patients need to grab from itself
  router.get('/exercises', (req, res) => {
    Patient.exercises.find()
      .then( exercises => res.json(exercises))
      .catch(err => 
        res.status(404).json({ noexercisesfound: 'No exercises found :('}));
  });

  router.get('/exercises/:id', (req, res) => {
    Patient.exercises.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err =>
        res.status(404).json({ noexercisefound: 'No exercise found by the info you gave'}));
  });

module.exports = router;