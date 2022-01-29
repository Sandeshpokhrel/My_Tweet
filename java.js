const colors = require('colors');
const http = require('http');
const Content = require('./routes');
const server = http.createServer(Content);
server.listen(2022);
console.log('hello'.green);