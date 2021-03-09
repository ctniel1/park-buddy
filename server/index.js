const express = require('express')
const cookieParser = require('cookie-parser')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const session = require('express-session')
const api = require('./api')

const app = express()
const port = 3000

passport.use(new LocalStrategy(function(username, password, done) {
  console.log('In local strategy')
  if (username && password === 'pass') return done(null, { username: username });
  return done(null, false);
}))

passport.serializeUser(function(user, done) {
  done(null, user.username)
})

passport.deserializeUser(function(id, done) {
  done(null, { username: id })
})

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', api)

// home page
app.get('/', function (req, res) {
  if (req.user) return res.send('Hello, ' + req.user.username);
  res.send('Hello, Stranger!');
});

// specify a URL that only authenticated users can hit
app.get('/protected',
  function(req, res) {
      if (!req.user) return res.sendStatus(401);
      res.send('You have access.');
  }
);

// specify the login url
app.put('/auth/login',
  passport.authenticate('local'),
  function(req, res) {
      res.send('You are authenticated, ' + req.user.username);
  });

// log the user out
app.put('/auth/logout', function(req, res) {
  req.logout();
  res.send('You have logged out.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})