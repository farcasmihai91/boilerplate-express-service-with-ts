import * as http from "http";
import config from "./config";


// Init the express application
const app = require("./express").default();

const server: http.Server = http.createServer(app);

server.listen(config.port);

server.on("error", (e : Error) => {
  console.log("Error starting server" + e);
});

server.on("listening", () => {
  console.log("Server started on port " + config.port);
});