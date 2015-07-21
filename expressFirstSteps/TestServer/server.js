var express = requite('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
})

var server = app.listen(8081, function() {
	var host = server.address.address
	var port = server.address().port

	console.los("Example app listening at http://%s:%s",  host, port)
})