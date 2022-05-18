import express, { json } from "express";
import APIroutes from "./routes";
import { promises as fsPromises } from "fs";
import csv from "csvtojson";

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});

const inputFile = "./users.csv",
  outputFile = "users.json";

app.get("/convert", (req, res) => {
  res.send("Conversion In Process!");

  csv()
    .fromFile(inputFile)
    .then((data) => {
      let newData = data.map(
        (item: {
          first_name: string;
          last_name: string;
          phone: string;
        }) => {
          let first = item.first_name,
            last = item.last_name,
            phone = item.phone;

          if (!phone) phone = "missing data!";

          return { first, last, phone };
        }
      );
      fsPromises.writeFile(
        outputFile,
        JSON.stringify(newData)
      );
    });
});

// app.use("/api", APIroutes);
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

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
