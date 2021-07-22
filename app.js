const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// const users = require("./routes/api/users");
const patients = require('./routes/api/patients');
const clinicians = require('./routes/api/clinicians');
// const exercises = require('./routes/api/exercises');

mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  } else {
    app.get("/", (req, res) => res.send("Hello World!!"));
  }

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/patients", patients);
app.use("/api/clinicians", clinicians);
// app.use('/api/exercises', exercises);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


