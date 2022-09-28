const colors = require('colors');
const http = require('http');
const Content = require('./routes'); // link another js file in this one i.e. routes.js
const server = http.createServer(Content);
server.listen(2022);
console.log('hello'.green);