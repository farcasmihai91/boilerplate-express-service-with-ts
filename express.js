"use strict";
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var router = require("./manager/index.server.manager");
function default_1(db) {
    var app = express();
    app.use('/', router);
    app.use(logger("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(function (req, res, next) {
        var err = new Error("Not Found");
        next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
    });
    if (app.get("env") === "development") {
        app.use(function (err, req, res, next) {
            res.status(500);
        });
    }
    return app;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=express.js.map