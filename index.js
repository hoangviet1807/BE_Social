import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import { Server } from "socket.io";

const app = express()
const PORT = process.env.port || 3002
app.use(cors())
// =========================================


const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", ["POST"]]
    }
})

io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);
    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with Id: ${socket.id} joined the room: ${data}`);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})