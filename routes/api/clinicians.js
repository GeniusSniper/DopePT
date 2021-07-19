const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Clinician = require('../../models/Clinician');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the clinicians route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.clinician.id,
      handle: req.clinician.handle,
      email: req.clinician.email
    });
  })

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

    // Check to make sure nobody has already registered with a duplicate email
    Clinician.findOne({ email: req.body.email })
      .then(clinician => {
        if (clinician) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A clinician has already registered with this address"})
        } else {
          // Otherwise create a new clinician
          const newclinician = new Clinician({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
          })

          bcrypt.genSalt(10, (err, salt) => {
            console.log('clinicianbcrpt: ' + err);
            bcrypt.hash(newclinician.password, salt, (err, hash) => {
              if (err) throw err;
              newclinician.password = hash;
              newclinician.save()
                .then(clinician => res.json(clinician))
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
  
    Clinician.findOne({email})
      .then(clinician => {
        if (!clinician) {
          return res.status(404).json({email: 'This clinician does not exist'});
        }
  
        bcrypt.compare(password, clinician.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {id: clinician.id, name: clinician.name};

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

module.exports = router;