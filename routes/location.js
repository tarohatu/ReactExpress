var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', async (req, res, next) => { 
  let locations = await db.location.findAll()
  .catch(error => {
    res.send(error)
  })
  return res.json(locations)
})

module.exports = router