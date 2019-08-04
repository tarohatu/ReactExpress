var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', async (req, res, next) => {
  let users = await db.user.findAllUsers()
  .catch(error => {
    res.status(500).send(error)
  })
  res.json(users)
})

router.post('/', async (req, res, next) => {
  let result = await db.user.create({
    name: req.body.name,
    user_name: req.body.user_name,
    password: req.body.password
  }).catch(error => {
    res.status(500).send(error)
  })
  res.json(result)
})

module.exports = router
