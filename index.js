const express = require('express')
const app = express()
const server = require('./src/index')



// Routers
app.use('/', require('./src/index'))

module.exports = app;