'use strict';

const db = require('../../models')
const LocalStrategy = require('passport-local').Strategy

module.exports = new LocalStrategy(
  {
    usernameField: 'user_name',
    passwordField: 'password',
    session: true
  },
  async (user_name, password, done) => {
    try{
      let user = await db.user.findByUserName(user_name)
      if(!user) {
        return done(null, false, { message: 'Unknown user'})
      }
      let isValid = await db.user.authenticate(user, password)
      if(!isValid) {
        return done(null, false, {message: 'Invalid password'})
      }
      return done(null, user)

    } catch(error) {
      return done(error)
    }
  }
)
