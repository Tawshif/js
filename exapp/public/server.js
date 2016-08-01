var connect = require('connect');
var http = require('http');

var app = connect();

function profile (request, response) {
	  console.log("User requested profile");
}

function forum (request, response) {
	  console.log("User requested Forum");
}

app.use("/profile",profile);
app.use("/forum",forum);

http.createServer(app).listen(8888);
console.log("server is running .... ");