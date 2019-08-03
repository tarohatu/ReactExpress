var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', async (req, res, next) => { 
  let locations = await db.location.allLocations(db)
  .catch(error => {
    return res.send(error)
  })
  return res.json(locations)
})

router.post('/', async (req, res, next) => {
  try {
    let user = await db.user.findById(req.body.user_id)
    if(!user) {
      return res.sendStatus(404)
    }
    let result = await db.location.create({
      user_id: user.id,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
    return res.json(result)
  } catch (error) {
    return res.send(error)
  }
})

module.exports = router