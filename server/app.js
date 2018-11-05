const express = require('express')
const path = require('path')
const apiRoutes = require('./routes')
const { syncAndSeed } = require('./db')

const app = express()

app.use(express.json())
app.use('/public',express.static(path.join(__dirname, '../public')))

app.use('/api', apiRoutes)

const init = () => syncAndSeed()
init()

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))

