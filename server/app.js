const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const jwt = require('jwt-simple')
const apiRoutes = require('./routes')
const { syncAndSeed } = require('./db')
const { User } = require('../server/db').models

const init = () => syncAndSeed()
init()

const port = process.env.PORT || 3000
const app = express()
const server = app.listen(port, () => console.log(`listening on port ${port}`))
const io = socketio(server)
require('./socket')(io)

app.use(express.json())
app.use('/public',express.static(path.join(__dirname, '../public')))

app.use((req, res, next) => {
  const token = req.headers.authorization
  console.log(token)
  if(!token){
    return next()
  }
  let id;
  try {
    id = jwt.decode(token, process.env.JWT_SECRET).id
    User.findById(id)
    .then(user => {
      req.user = user
      next()
    })
    .catch(next)
  } catch(err){
    return next({ status : 401})
  }
})

app.use('/api', apiRoutes)


app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).send({error : err.message})
})

