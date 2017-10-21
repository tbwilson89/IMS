const express = require('express')
const path = require('path')
const request = require('request')
const https = require('https')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  console.log('Someone has communicated with the server!')

  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port);

console.log(`Program is listening on ${port}`)
