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
    conn.execute('INSERT INTO queues (id, attractionId, name, rate, totalQueued, status) VALUES (?, ?, ?, ?, ?, ?)',
      [id, req.body.attractionId, req.body.name, req.body.rate, req.body.totalQueued, req.body.status], 
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.get('/queue/:id', (req, res) => {
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

router.put('/queue/:id', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('UPDATE queues SET attractionId = ?, name = ?, rate = ?, totalQueued = ?, status = ? WHERE id = ?',
      [req.body.attractionId, req.body.name, req.body.rate, req.body.totalQueued, req.body.status, req.params.id],
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
    });
    db.releaseConnection(conn);
  })
});

router.delete('/queue/:id', (req, res) => {
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
});

router.get('/userQueues/:userId', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('SELECT * FROM queues WHERE attractionId IN (SELECT attractionId FROM user_queues WHERE userId = ?)',
      [req.params.userId],
      function (err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    db.releaseConnection(conn);
  })
});

router.put('/userQueues', (req, res) => {
  db.getConnection(function(err, conn) {
    if (err) console.log(err);
    conn.execute('INSERT INTO user_queues (userId, attractionId) VALUES (?, ?)',
      [req.body.userId, req.body.attractionId],
      function(err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    db.releaseConnection(conn);
  })
})