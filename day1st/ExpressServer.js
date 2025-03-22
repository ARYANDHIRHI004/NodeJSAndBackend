const express = require('express')

const handlerFunction = express()

handlerFunction.use()

handlerFunction.get('/', (req, res)=> res.end('homepage'))
handlerFunction.get('/contect-us', (req, res)=> res.end('contect us'))
handlerFunction.get('/about', (req, res)=> res.end('about us'))

handlerFunction.listen(8000, (params) => {
    console.log('Server started');
  })