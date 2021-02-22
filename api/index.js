const express = require('express')
const users = require('./users')
const attractions = require('./attractions')
const queues = require('./queues')

const router = new express.Router()
module.exports = router

router.use('/users', users)
router.use('/attractions', attractions)
router.use('/queues', queues)