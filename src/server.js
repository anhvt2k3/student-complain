var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    readFile()
    response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
async function readFile() {
  fs.readFile('C:\\Users\\Admin\\Desktop\\student-complaints-2\\complain\\src\\Datasetprojpowerbi.csv', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  });
}