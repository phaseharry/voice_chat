const router = require('express').Router()
const jwt = require('jwt-simple')
const { User } = require('../db').models

router.post('/', (req, res, next) => {
  const { email, password } = req.body
  User.findOne({
    where: {
      email,
      password
    }
  })
  .then(user => {
    if(!user){
      return next({status : 401})
    } 
    const token = jwt.encode({id: user._id}, process.env.JWT_SECRET)
    res.send({ token })
  })
})

router.get('/', (req, res, next) => {
  if(!req.user){
    return next({ status: 401})
  }
  res.send(req.user)
})

router.post('/create', (req, res, next) => {
  User.create(req.body)
  .then(user => res.send(user))
  .catch(next)
})

module.exports = router