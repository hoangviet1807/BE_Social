import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";
import message from "./routers/message.js";
import user from "./routers/user.js";
import room from "./routers/room.js"
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 8000;
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
// =========================================
const uri =
  "mongodb+srv://viet:wZasfBLAXSy07nl4@cluster0.ut0hp.mongodb.net/social?retryWrites=true&w=majority";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);
  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data);
    console.log(`User with Id: ${socket.id} joined the room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});



// app.use("/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

app.use("/message", message);

app.use("/user", user);

app.use("/room", room)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(8080, () => {
      console.log("listening on port " + 8080);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
