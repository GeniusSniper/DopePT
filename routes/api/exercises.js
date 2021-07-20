const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Exercise = require("../../models/Exercise");


router.get("/test", (req, res) => res.json({ msg: "This is the exercises route" }));

router.get('/', (req, res) => {
    Exercise.find()
    .then( exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found :('}));
});

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err =>
        res.status(404).json({ noexercisefound: 'No exercise found by the info you gave'}));
});

//adding post route for clian

module.exports = router;