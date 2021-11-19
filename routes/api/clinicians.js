const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Clinician = require("../../models/Clinician");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Exercise = require("../../models/Exercise");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateExerciseInput = require("../../validation/exercises");
const Patient = require("../../models/Patient");

router.get("/test", (req, res) =>
  res.json({ msg: "This is the clinicians route" })
);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.clinician.id,
      handle: req.clinician.handle,
      email: req.clinician.email,
      phone: req.clinician.phone,
      isClinician: true,
    });
  }
);

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  Clinician.findOne({ email: req.body.email }).then(
    (clinician) => {
      if (clinician) {
        // Throw a 400 error if the email address already exists
        return res
          .status(400)
          .json({
            email: "A clinician has already registered with this address",
          });
      } else {
        // Otherwise create a new clinician
        const newclinician = new Clinician({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          isClinician: true,
        });

        bcrypt.genSalt(10, (err, salt) => {
          // console.log('clinicianbcrpt: ' + err);
          bcrypt.hash(newclinician.password, salt, (err, hash) => {
            if (err) throw err;
            newclinician.password = hash;
            newclinician
              .save()
              .then((payload) => {
                jwt.sign(
                  {
                    id: payload.id,
                    handle: payload.handle,
                    isClinician: true,
                    phone: payload.phone,
                    email: payload.email,
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
                        isClinician: true,
                      },
                      success: true,
                      token: "Bearer " + token,
                    });
                  }
                );
              })
              .catch((err) => console.log(err));
          });
        });
      }
    },
    (err) => console.log(err)
  );
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Clinician.findOne({ email }).then((clinician) => {
    if (!clinician) {
      return res.status(404).json({ email: "This clinician does not exist" });
    }

    bcrypt.compare(password, clinician.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: clinician.id,
          handle: clinician.handle,
          email: clinician.email,
          phone: clinician.phone,
          isClinician: true,
        };

        jwt.sign(
          payload,
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
                isClinician: true,
              },
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

// router.post("/:userId", (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   Clinician.findById(req.params.userId).then( async (clincian) => {
//     clincian.handle = req.body.handle;
//     clincian.email = req.body.email;
//     clincian.phone = req.body.phone;
//   });
// });

router.get("/:userId", async (req, res) => {
  let clinician = await Clinician.findById(req.params.userId).populate(
    "patients"
  );
  clinician.patients = clinician.patients.map((patient) => {
    patient.password = undefined;
    // patient.exercises = undefined;
    return patient;
  });
  return res.json(clinician.patients);
});

//adding clinicianId to the routes
router.get("/:userId/exercises", (req, res) => {
  //probably need to add to check if the id matches doctor
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) =>
      res.status(404).json({ noexercisesfound: "No exercises found :(" })
    );
});

// router.get('/:userId/exercises/:id', (req, res) => {
//     Exercise.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err =>
//         res.status(404).json({ noexercisefound: 'No exercise found by the info you gave'}));
// });

// router.get('/:userId', async (req, res) => {
//   let patients = await Clinician.findById(req.params.userId).populate('Patient');
//   return res.json(patients.patients);
// })

router.post("/:userId/exercises/", (req, res) => {
  // console.log(req.body.body, req.files, req.file, next);
  // return res.status(200).json({ data: req.files});

  const { errors, isValid } = validateExerciseInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  Exercise.findOne({ title: req.body.title }).then((exercise) => {
    if (exercise) {
      return res.status(400).json({ title: "The title has already exists" });
    }

    const newExercise = new Exercise({
      title: req.body.title,
      description: req.body.description,
      instructions: req.body.instructions,
      urls: req.body.urls,
    });

    newExercise
      .save()
      .then((exercise) => res.json(exercise))
      .catch((err) => console.log(err));
  });
});

router.delete("/:exerciseId", (req, res) => {
  Exercise.findOneAndRemove({ _id: req.params.exerciseId }).exec((err) => {
    if (err) {
      return res.json({
        code: 400,
        message: "There was an error deleting it ",
        error: err,
      });
    }
    return res.json({ code: 200, message: "deleted" });
  });
});

router.post("/assign/:exerciseId/:patientId", (req, res) => {
  Exercise.findById(req.params.exerciseId).then((exer) => {
    Patient.findById(req.params.patientId).then(async (pat) => {
      pat.exercises.push(exer);
      await pat.save();
      return res.json(exer);
    });
  });
});

module.exports = router;
