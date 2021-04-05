const express = require('express')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const db = require('../databaseconfig');
const { v4: uuidv4 } = require('uuid');

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.getConnection(function(err, conn) {
      conn.execute('SELECT * FROM users WHERE username = ?',
        [username], // Change back to username
        function(err, user) {
          if (err) return done(err)
          if (!user[0]) {
            return done(null, false, {message: 'Incorrect username.'})
          }
          if (user[0].password !== password) { // Change back to password
            return done(null, false, {message: 'Incorrect password.'})
          }
          return done(null, user)
        })
    })
  }
))

const router = new express.Router();
module.exports = router;

router.get('/', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM users', function (err, results) {
      if (err) console.log(err);
      results.forEach(result => {
        delete result.password;
      });
      res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.put('/', (req, res) => {
  const id = uuidv4();
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('INSERT INTO users (id, username, firstName, lastName, email, password, phone) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, req.body.username, req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.phone], 
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.get('/user/:id', (req, res) => {
  console.log('In user get')
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM users WHERE id = ?',
      [req.params.id],
      function(err, results) {
        if (err) console.log(err);
        delete results[0].password;
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.put('/user/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('UPDATE users SET username = ?, firstName = ?, lastName = ?, email = ?, password = ?, phone = ? WHERE id = ?',
      [req.body.username, req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.phone, req.params.id],
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.delete('/user/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    db.getConnection(function(err, conn) {
      if (err) console.log(err);
      conn.execute('DELETE FROM users WHERE id = ?',
        [req.params.id],
        function(err, results) {
          if (err) console.log(err);
          res.send(results);
      });
      db.releaseConnection(conn);
    })
  })
});

router.get('/protected', (req, res) => {
  console.log('In protected')
  if (!req.user) return res.sendStatus(401)
  res.send('You have access.')
})

router.post('/login',
       passport.authenticate('local'),
       (req, res) => {
         res.send('You are authenticated, ' + req.user.username);
       })

router.get('/logout', (req, res) => {
  req.logout();
  res.send('You have logged out');
})