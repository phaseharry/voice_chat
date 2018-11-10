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
  const { message, userId  } = req.body
  Message.create({
    text: message,
    userId
  })
  .then(message => {
    if(message.userId){
      Message.findById(message._id, {
        include: {
          model: User
        }
      })
      .then((newMessage) => res.send(newMessage))
    } else {
      res.send(message)
    }
  })
  .catch(next)
})


module.exports = router