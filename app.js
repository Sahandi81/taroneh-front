const http = require('http');
var fs = require('fs');
const hostname = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
fs.readFile('./public/hello.html', function(error, content) {
if (error) {
res.writeHead(500);
res.end();
}
else {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content, 'utf-8');
}
});
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});