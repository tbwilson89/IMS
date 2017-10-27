const express = require('express')
const path = require('path')
const request = require('request')
const https = require('https')

const app = express()
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const mongoose = require('mongoose')

const url = 'mongodb://testuser:test@ds229415.mlab.com:29415/ims'

app.use(express.static(path.join(__dirname, 'client/build')))

app.get(`/api/userlookup?\*`, (req, res) => {
  let test = req.url.slice(16).toString()
  console.log('this api has been accessed! ' + test)
  function callback(info) {
    if(info === 'notfound'){
      res.json('no user')
    } else {
      console.log('Callback has been run: ' +info.user)
      res.json(info)
    }
  }
  mongoClient.connect(url, function(err, db){
    if(err){console.log(err, 'this didn\'t work')}
    else {
      db.collection('users').find({'user': test}).toArray(function(err, res){
        if(err){console.log(err)}
        else if(res.length) {
          console.log('Found it!: ', res[0])
          db.close(callback(res[0]))
        } else {
          console.log('not found!!', res)
          db.close(callback('notfound'))
        }
      })
    }
  })
})

app.get('*', (req, res) => {
  console.log('Someone has communicated with the server!')

  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port);

console.log(`Program is listening on ${port}`)
