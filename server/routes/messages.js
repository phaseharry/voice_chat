const router = require('express').Router()
const { Message, User } = require('../db/').models

router.get('/', (req, res, next) => {
  Message.findAll({
    include: { model: User }
  })
  .then(messages => res.send(messages))
  .catch(next)
})

router.post('/', (req, res, next) => {
  const { message } = req.body
  Message.create({
    text: message
  })
  .then(message => res.send(message))
  .catch(next)
})


module.exports = router