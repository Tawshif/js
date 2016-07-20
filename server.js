var connect = require('connect');
var http = require('http');

var app = connect();

// function doFirst(request, response, next) {
//     console.log("Trisha");
//     next();
// }

// function doSecond(request, response, next) {
//     console.log("Tuna");
//     next();
// }

// app.use(doFirst);
// app.use(doSecond);

function profile(request, response) {
    console.log("User requested profile");
}

function info(request, response) {
    console.log("User requested info");
}

app.use('/profile', profile);
app.use('/info', info);


http.createServer(app).listen(8888);
console.log("server is running ....");
