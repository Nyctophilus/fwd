"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 3000;
app.listen(port, function () {
    console.log("server is running at localhost:".concat(port));
});
app.use("/api", routes_1.default);
/*		-HL req,res


    app.get("/", (req, res) => {
    console.log(req.qurey.title);
    console.log(req.cookies.name);

    console.log(req.ip);
    // prints '127.0.0.1'

    // https:website.com/students
    console.log(req.path);
    // prints '/students'

    //https:students.website.com
    console.log(req.subdomains);
    // prints 'students'

    console.log(req.params()); //a method to get the param values from a request URL.
    });

    app.get("/", (req, res) => {
    // send() - sends a response from the server to the browser.
    res.send("Hello, world.");

    // status() - set's an HTTP status.
    res.status(400).send("bad request");

    // cookie() - set's a cookie for the route.
    res.cookie("admin", {
        expires: new Date(Date.now() + 1000000),
    });
    });
*/
/*	-HL middlewares
    Middleware is really just a function that is applied between the request and response.


    const middleware = [cors(), logger];  // can be multiple

    app.use(middleware); // app level
    students.get('/', middleware, (req, res) => { // do stuff }); // endpoint level


        FIXME custom middleware
        
    const myMiddleware = (req, res, next) => {
    // do stuff
    next();
    };

*/
