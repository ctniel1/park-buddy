const express = require('express')
const api = require('./api')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api', api)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})