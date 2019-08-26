const router = require('express').Router()
let path = require('path')

router.get('/', (req, res) =>{
  res.send(`API home route has been hit with ${req.method}`)
})