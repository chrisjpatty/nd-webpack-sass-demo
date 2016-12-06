var http = require('http');
var dispatcher = require('httpdispatcher');
var express = require('express');
const app = express()
const port=3003;

app.use(express.static('src'));
app.use(express.static('build'));

app.get('/', (request, response) => {
  response.send('index.html')
})

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
