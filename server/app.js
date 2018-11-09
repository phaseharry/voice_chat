const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const apiRoutes = require('./routes')
const { syncAndSeed } = require('./db')


const port = process.env.PORT || 3000
const app = express()
const server = app.listen(port, () => console.log(`listening on port ${port}`))
const io = socketio(server)
require('./socket')(io)

app.use(express.json())
app.use('/public',express.static(path.join(__dirname, '../public')))

app.use('/api', apiRoutes)

const init = () => syncAndSeed()
init()

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


