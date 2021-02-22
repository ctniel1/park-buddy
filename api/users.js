const express = require('express')

const router = new express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send('users get, will get the users account')
})

router.put('/', (req, res) => {
  res.send('users put, will create a new account')
})

router.put('/:id', (req, res) => {
  res.send('user put, will update an account')
})

router.delete('/:id', (req, res) => {
  res.send('user delete, will delete an account')
})