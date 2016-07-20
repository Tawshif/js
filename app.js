var path = require('path');

var webHome = "Desktop/anik//sekailab/index.html";
var webAbout= "Desktop/anik//sekailab/about.html";

console.log(path.normalize(webHome));
console.log(path.dirname(webAbout));
console.log(path.basename(webAbout));
console.log(path.extname(webAbout));


var fs = require('fs');

fs.writeFileSync("mula.txt", "mula is bad for healdth");

console.log(fs.readFileSync("mula.txt").toString());


// setInterval(function(){
// 	console.log("Bee");
// }, 1000);


console.log(__dirname);
console.log(__filename);

