import express from 'express';
import path from 'path';
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes')
const passport = require('passport')
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

app.use('/api/v1', passport.authenticate('jwt', {session: false}), indexRouter)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(3000, ()=> {
  console.log('server running')
});