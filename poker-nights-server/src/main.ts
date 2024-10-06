const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server)

io.on('connection', (socket) => {
    console.log(socket.id);
})

const port = process.env.PORT || 3000;
server.listen(port, ()=> console.log(`Listening on ${port}`));