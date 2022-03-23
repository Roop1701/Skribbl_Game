const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const GameSocketService = require("./services/game_socket ");
GameSocketService.init(server);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
