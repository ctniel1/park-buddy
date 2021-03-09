const express = require('express')
const db = require('../databaseconfig');
const { v4: uuidv4 } = require('uuid');

const router = new express.Router();
module.exports = router;

router.get('/', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM attractions', function (err, results) {
      if (err) console.log(err);
      res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.put('/', (req, res) => {
  const id = uuidv4();
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('INSERT INTO attractions (id, name, description, type, minHeight, rating, totalRatings) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, req.body.name, req.body.description, req.body.type, req.body.minHeight, req.body.rating, req.body.totalRatings], 
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.get('/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM attractions WHERE id = ?',
      [req.params.id],
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.put('/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('UPDATE attractions SET name = ?, description = ?, type = ?, minHeight = ?, rating = ?, totalRatings = ? WHERE id = ?',
      [req.body.name, req.body.description, req.body.type, req.body.minHeight, req.body.rating, req.body.totalRatings, req.params.id],
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.delete('/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    db.getConnection(function(err, conn) {
      if (err) console.log(err);
      conn.execute('DELETE FROM attractions WHERE id = ?',
        [req.params.id],
        function(err, results) {
          if (err) console.log(err);
          res.send(results);
      });
      db.releaseConnection(conn);
    })
  })
});