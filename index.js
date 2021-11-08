const express = require('express')
const app = express()
const path = require('path')
const { prototype } = require('stream')
 
app.use(express.static('./public'))

app.get('/', function (req, response) {
  response.sendFile(path.join(_dirname, '/public/index.html'))
})

const port = 5000;

app.listen(port, function (){
  console.log("Listenning on port: " + port)
})

