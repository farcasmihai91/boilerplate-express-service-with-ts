import * as bodyParser from "body-parser";
import config from "./config";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";


var app: express.Express = express();

//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: Function): void => {

    let err: Error = new Error("Not Found");
    next(err);
});

// production error handler
app.use((err: any, req: express.Request, res: express.Response, next): void => {
    res.status(err.status || 500).render("error", {
        message: err.message,
        error: {}
    });
});

if (app.get("env") === "development") {
    app.use((err: Error, req: express.Request, res: express.Response, next): void => {
        res.status(500).render("error", {
            message: err.message,
            error: err
        });
    });
}

app.listen(config.port, function (err) {
    if(!err){
        console.log(`app is listening on port ${config.port}`);
    }
    console.log(err);
})