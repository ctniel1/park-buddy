const express = require('express')
const cookieParser = require('cookie-parser')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const session = require('express-session')
const api = require('./api')
const cors = require('cors')
const { default: bodyParser } = require('body-parser')

const app = express()
const port = 3000

require('dotenv').config({ path: 'server/.env' })

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', api)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})