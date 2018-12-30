const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

 let app = express();
 let server = http.createServer(app);
 let io = socketIO(server);

 app.use(express.static(publicPath));

 io.on('connection', (socket) => {
    

        socket.emit('newMessage', generateMessage('Admin', 'welcome to chat app'));

        socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'));


        socket.on('createMessage', (message) => {
            console.log("message:", message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     form: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })
    });

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    })
});
 server.listen(port, () => {
     console.log(`Server is up on port ${port}`)});