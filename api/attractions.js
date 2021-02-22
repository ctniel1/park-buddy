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
  res.send('attraction get, will get an attraction')
})

router.put('/:id', (req, res) => {
  res.send('attraction put, will update an attraction')
})

router.delete('/:id', (req, res) => {
  res.send('attraction delete, will delete an attraction')
})