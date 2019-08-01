var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', async function(req, res, next) {
  let users = await db.user.findAll();
  res.json(users);
});

router.post('/', async (req, res, next) => {
  let name = req.body.name;
  let result = await db.user.create({
    name: name
  }).catch(error => {
    res.sendStatus(error)
  });
  res.json(result)
});

module.exports = router;
