const express = require('express')
const app = express()
const server = require('./src/index')

server.applyMiddleware({ app }); // app is from an existing express app


// Routers
app.use('/', require('./src/index'))

module.exports = app;