let app = require('express')();
let http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    console.log(message);
    io.emit('message', {type:'new-message', text: message});    
  });
});

http.listen(3000, () => {
  console.log('started on port 5000');
});