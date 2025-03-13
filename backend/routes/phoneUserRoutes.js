const express= require('express')
const router = express.Router();
const phoneUsers = require('../db/queries/phoneUsers');

//Get users with thier mobile phones

router.get('/',(req,res) => {
  phoneUsers.getPhoneUsers()
            .then(users => {
              res.json({users})
            })
            .catch(err => {
              res.status(500)
                .json({error: err.message});
       });
});

module.exports = router;