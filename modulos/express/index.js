const express = require('express');
require('colors');
const server = express();

server.get('/', function(req, res){
    res.send("<h1>hola mundo con express</h1>");
});

server.listen(3000, function() {
    console.log("Server started at port 3000".green);
})
