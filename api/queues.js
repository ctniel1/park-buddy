const express = require('express')

const router = new express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send('queues get, will get all queues')
})

router.put('/', (req, res) => {
  res.send('queues put, will create a new queue')
})

router.get('/:id', (req, res) => {
  res.send('queue get, will get the queue with id ' + req.params.id)
})

router.put('/:id', (req, res) => {
  res.send('queue put, will update the queue with id ' + req.body.id)
})

router.delete('/:id', (req, res) => {
  res.send('queue delete, will delete the queue with id ' + req.body.id)
})