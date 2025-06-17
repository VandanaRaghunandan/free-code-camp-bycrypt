'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const bcrypt = require('bcrypt');
const saltRounds = 12;

app.post('/register', (req, res) => {
  const plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
    if (err) return next(err);
    
    // Normally you'd store the hash in your DB here
    // For the challenge, just return success
    res.send("Hash generated");
  });
});
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
