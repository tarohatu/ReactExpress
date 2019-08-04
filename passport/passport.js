'use strict';

const db = require('../models')
const local = require('./storategies/local')
const jwt = require('./storategies/jwt')

module.exports = (passport) => {
  passport.serializeUser((user, cb) => cb(null, user.id))
  passport.deserializeUser((id, cb) =>
    db.user.findById(id)
    .then(user => {
      cb(user, null)
    })
    .catch(error => {
      cb(error)
    })
  )
  passport.use(local)
  passport.use(jwt)
}