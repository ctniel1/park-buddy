const express = require('express')

const router = new express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send('attractions get, will get all attractions')
})

router.put('/', (req, res) => {
  res.send('attractions put, will create a new attraction')
})

router.get('/:id', (req, res) => {
  res.send('attraction get, will get the attraction with id ' + req.params.id)
})

router.put('/:id', (req, res) => {
  res.send('attraction put, will update the attraction with id ' + req.body.id)
})

router.delete('/:id', (req, res) => {
  res.send('attraction delete, will delete the attraction with id ' + req.body.id)
})