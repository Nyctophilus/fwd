import express from "express";
import APIroutes from "./routes";

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});

app.use("/api", APIroutes);

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
		
	const myMiddleware = (req: express.Request, res: express.Response, next: Function): void => {
	// do stuff
	next();
	};

*/
