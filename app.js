import express from 'express';
import path from 'path';
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes')
const passport = require('passport')
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.static(path.join('./', 'dist')))

app.use(bodyParser.urlencoded({
  limit: '5mb',
  extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())

app.use(passport.initialize())
require('./passport/passport')(passport)

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    host: 'redis',
    port: 6379,
    prefix: 'sid:'
  }),
  cookie: {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return next(error)
    }
    if (!user) {
      return res.status(401).send(info)
    }
    req.login(user, (error) => {
      if (error) {
        return next(error)
      }
      const token = jwt.sign(
        { id: user.id, name: user.name, user_name: user.user_name },
        process.env.JWT_SECRET || "secret", 
        {
          expiresIn: '24h'  
        }
      )
      return res.status(200).json({ token: token })
    })
  })(req, res, next)
})

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(403).send()
  }
}

app.use('/api/v1', indexRouter)
app.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(3000, ()=> {
  console.log('server running')
});