const http = require("http");
const express = require("express");
const {Server} = require("socket.io")

const app = express();

app.use(express.static('public'))

const server = http.createServer(app);
const io = new Server(server)

app.get("/", (req, res) => {
    res.sendFile("index");
});

io.on('connection', (socket) => {
    socket.on('message',(msg)=>{
        console.log("[MESSAGE] :",msg)
        io.emit('message',msg);
    })
});
  
server.listen(8000, () => {
    console.log("sun rha hu...");
});