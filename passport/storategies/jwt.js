'use strict';

const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const db = require('../../models')

module.exports = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.JWT_SECRET || 'secret'
  },
  async (payload, done) => {
    let user = await db.user.findById(payload.id)
    .catch(error => {
      return done(error)
    })
    return done(null, user)
  }
)