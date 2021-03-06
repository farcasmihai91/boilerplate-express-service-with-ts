"use strict";
var http = require("http");
var config_1 = require("./config");
var app = require("./express").default();
var server = http.createServer(app);
server.listen(config_1.default.port);
server.on("error", function (e) {
    console.log("Error starting server" + e);
});
server.on("listening", function () {
    console.log("Server started on port " + config_1.default.port);
});
//# sourceMappingURL=index.js.map