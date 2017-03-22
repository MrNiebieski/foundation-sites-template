var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.get('/', function(request, response) {
  response.sendFile('index.html', {root: __dirname })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})