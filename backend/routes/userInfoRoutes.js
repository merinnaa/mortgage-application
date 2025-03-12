const express = require('express');
const router = express.Router();
const userInfoQueries = require('../db/queries/users')

//Get all users

router.get('/', (req, res) => {
  userInfoQueries.getUsers()
    .then(users => {
      res.json({users});
    })
    .catch(err => {
      res.status(500)
         .json({error:err.message});
    });
});

module.exports = router;