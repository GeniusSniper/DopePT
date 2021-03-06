const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Patient = require("../../models/Patient");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
// const Exercise = require("../../models/Exercise");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const Exercise = require("../../models/Exercise");
const Clinician = require("../../models/Clinician");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the patients route" })
);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.patient.id,
      handle: req.patient.handle,
      email: req.patient.email,
      phone: req.patient.phone,
      isClinician: false,
      calendar: req.patient.calendar,
    });
  }
);

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  Patient.findOne({ email: req.body.email }).then((patient) => {
    if (patient) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "A patient has already registered with this address" });
    } else {
      // Otherwise create a new patient
      let newPatient = new Patient({
        handle: req.body.handle,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        isClinician: false,
      });

      bcrypt.genSalt(10, (err, salt) => {
        // console.log('userbcrpt: ' + err);
        bcrypt.hash(newPatient.password, salt, (err, hash) => {
          if (err) throw err;
          newPatient.password = hash;
          newPatient
            .save()
            .then((payload) => {
              Clinician.find().then((cli) => {
                let num = parseInt(Math.random() * cli.length);
                Patient.findById(payload.id).then(async (pat) => {
                  pat.clinician = cli[num];
                  cli[num].patients.push(pat);
                  await pat.save();
                  await cli[num].save();
                });
              });

              jwt.sign(
                {
                  id: payload.id,
                  handle: payload.handle,
                  isClinician: false,
                  email: payload.email,
                  phone: payload.phone,
                },
                keys.secretOrKey,
                // Tell the key to expire in one hour
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    user: {
                      id: payload.id,
                      handle: payload.handle,
                      email: payload.email,
                      phone: payload.phone,
                      isClinician: false,
                    },
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
              // res.json(patient)
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Patient.findOne({ email }).then((patient) => {
    if (!patient) {
      return res.status(404).json({ email: "This patient does not exist" });
    }

    bcrypt.compare(password, patient.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: patient.id,
          handle: patient.handle,
          email: patient.email,
          isClinician: false,
          phone: patient.phone,
          calendar: patient.calendar,
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              user: payload,
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

router.get("/:userId", async (req, res) => {
  let clinician = await Patient.findById(req.params.userId).populate(
    "clinician"
  );
  clinician.clinician.exercises = undefined;
  clinician.clinician.password = undefined;
  clinician.clinician.patients = undefined;
  return res.json(clinician.clinician);
});
//
router.get("/:userId/exercises", async (req, res) => {
  let patient = await Patient.findById(req.params.userId).populate("exercises");
  // console.log(patient.exercises)
  return res.json(patient.exercises);
  // .catch(err =>
  //   res.status(404).json({ noexercisesfound: 'No exercises found :('}));
});

//probably need to look at this one again
// router.get('/:userId/exercises/:id', (req, res) => {
//   Patient.findByI(req.params.userId).exercise.findById(req.params.id).then( some => {
//     return res.json(some)
//   })
//   .catch(err =>
//     res.status(404).json({ noexercisesfound: 'No exercises found :('}));

//   // Patient.exercises.findById(req.params.id)
//   //   .then(exedrcise => res.json(exercise))
//   //   .catch(err =>
//   //     res.status(404).json({ noexercisefound: 'No exercise found by the info you gave'}));
// });

router.post("/updateCalendar/:userId", (req, res) => {
  Patient.findById(req.params.userId).then(async (pat) => {
    pat.calendar = req.body;
    await pat.save();
    const payload = {
      id: pat.id,
      handle: pat.handle,
      email: pat.email,
      phone: pat.phone,
      calendar: pat.calendar,
      isClinician: false,
    };

    jwt.sign(
      payload,
      keys.secretOrKey,
      // Tell the key to expire in one hour
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          user: payload,
          success: true,
          token: "Bearer " + token,
        });
      }
    );
  });
});

module.exports = router;
