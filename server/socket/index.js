module.exports = io => {
  io.on('connection', socket => {
    socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message)
    })
    socket.on('disconnect', () => {
      console.log(`${socket.id} has disconnected`)
    })
  })
}