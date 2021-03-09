const express = require('express')
const db = require('../databaseconfig');
const { v4: uuidv4 } = require('uuid');

const router = new express.Router();
module.exports = router;

router.get('/', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM queues', function (err, results) {
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
    conn.execute('INSERT INTO queues (id, attractionId, rate, totalQueued, status) VALUES (?, ?, ?, ?, ?)',
      [id, req.body.attractionId, req.body.rate, req.body.totalQueued, req.body.status], 
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
    conn.execute('SELECT * FROM queues WHERE id = ?',
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
    conn.execute('UPDATE queues SET attractionId = ?, rate = ?, totalQueued = ?, status = ? WHERE id = ?',
      [req.body.attractionId, req.body.rate, req.body.totalQueued, req.body.status, req.params.id],
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
      conn.execute('DELETE FROM queues WHERE id = ?',
        [req.params.id],
        function(err, results) {
          if (err) console.log(err);
          res.send(results);
      });
      db.releaseConnection(conn);
    })
  })
});