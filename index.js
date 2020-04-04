var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io").listen(http);
var name = "Admin";

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("User Connected");
  io.emit("chat message", "Pruthive is Connected");
  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
