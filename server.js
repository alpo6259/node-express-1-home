const http = require('http')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

const httpServer = http.createServer(app)

httpServer.listen(PORT, console.log(`Server is listening ${PORT} port`))
