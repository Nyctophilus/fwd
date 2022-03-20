// import express
import { express, Static } from "express";

// Start up an instance of express
const app = express();

/* Dependencies */
// middleware which is like the gooey part between the client & server side of the web app , such in case they speak different language
import { urlencoded, json } from "body-parser";

//Here we are configuring express to use body-parser as middle-ware.
app.use(urlencoded({ extended: false }));
// just to tell how our data will be dealt with .. mostly json!
app.use(json());

// Cors for cross origin allowance
// cors allows browser and server talk to each other without any security interputions
import cors from "cors";

app.use(cors());

/* Initializing the main project folder */
// we pointing our app to the folder we wanna it to look at
// allows to write server code that connects to client which would be in a folder called 'website', which is at the same level of the Server.js file based!
app.use(Static("website"));

/* -HL  Set up the local server */
const port = 3000;

const server = app.listen(port, () =>
  console.log(`server is running at port:${port}`)
);

function listening() {
  console.log(`server is running`);
}

/*	
	Steps:
	
	• Make sure Node is installed on your computer
	• Install Express and other Node packages as explained in this course
	• You will need 3 applications open: Code editor, Terminal, Chrome Browser
	• Code Editor: Write code in Files (for example ser ver.js and app.js)
	• Terminal: Run ser ver.js file using command node ser ver.js
	• Browser: Look in the dev tools of chrome browser for feedback (use console.log () to make
	sure your code is working properly).
*/

/*
	• HTTP Request: It is an action to be performed on a resource identified by a given request-url.
	  Some HTTP request methods are GET, POST, PUT, DELETE, etc.
	• GET: GET is an HTTP request method used to request data from a specified resource.
	• POST: POST is an HTTP request method that requests the webserver to accept the data enclosed
	  in the body of the request message.
*/
