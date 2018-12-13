const express = require("express");
var server = express();
// const socketIO = require("socket.io");
var http = require('http').Server(server);
var io = require('socket.io')(http);
// var io = socketIO(server);

const path = require("path");
// const pedometer = require('pedometer').pedometer;

// Configuration
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'public/index.html');

var codes = [];

// Start server
server.get('/', function(req, res){
    res.sendFile(INDEX);
})
server.use(express.static('public'));
http.listen(PORT, () => console.log("Listening on localhost:" + PORT));

io.on("connection", function(socket){
    // console.log('a user connected', socket.id);

    socket.on('code', function(codeData){
        codes.push(codeData);
        console.log('code', codes);
        socket.broadcast.emit('code', codeData);
        socket.emit('code', codeData);
    })
})


