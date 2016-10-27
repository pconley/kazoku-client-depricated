/// <reference path="../typings/index.d.ts" />
import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";

import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";

const app: express.Application = express();
app.disable("x-powered-by");

// var myLogger = function (req, res, next) {
//   console.log('LOGGED: '+req.url);
//   next();
// };
// app.use(myLogger);

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", protectedRouter);
app.use("/login", loginRouter);

app.use('/data', express.static(join(__dirname, '../data')));
app.use('/client', express.static(join(__dirname, '../client')));

// app.get('/', function (req, res) {
//   console.log("*** here"); // [ '/adm*n', '/manager' ]
//   res.send('Admin Homepage');
// });

// error handlers

// development error handler: will print stacktrace
console.log("setup: env = "+app.get("env"));
if (app.get("env") === "development") {
    console.log("setup: dirname =",__dirname);
    app.use(express.static(join(__dirname, '../node_modules')));
    app.use(express.static(join(__dirname, '../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log("app#use dev-env error. url = "+req.url);
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to "next" error handler - dev or prod
app.use(function(req: express.Request, res: express.Response, next) {
    //console.log("app#use catch 404. request...",req.url);
    let err = new Error("The Page Not Found");
    next(err);
});

// production error handler: no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    //console.log("app#use prod error. request...",req.url,err);
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
