var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', async (req, res, next) => { 
  let locations = await db.location.allLocations(db)
  .catch(error => {
    res.status(500).send(error)
  })
  res.json(locations)
})

router.post('/', async (req, res, next) => {
  try {
    let user = await db.user.findById(req.body.user_id)
    if(!user) {
      res.status(404)
    }
    let result = await db.location.create({
      user_id: user.id,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router