const appData = [
  {
    data1:
      "helloooooooooooo from get route!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  },
];

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("apisAndAsyncJS_Lesson/website")); // connects server code to client code

//  for cross origin allowance without any security interputions
app.use(cors());

const port = 33;

app.listen(port, () =>
  console.log(`server is running at localhost:${port}`)
);

// GET request made to the server
app.get("/", (req, res) => {
  res.send(appData[0].data1);
});

// HTTP POST request sends data to the project's endpoint
app.post("/data", (req, res) => {
  const newEntries = {
    posted: req.body.posted,
  };

  appData.intelligence = req.body.intelligence;
  appData.push(newEntries);

  console.log(appData);
});

app.post("/movie", (req, res) => {
  const newEntries = {
    movie: req.body.movie,
    score: req.body.score,
  };
  appData.push(newEntries);
  console.log(appData);
});

/*
	-HL HTTP Request: It is an action to be performed on a resource identified by a given request-url. Some HTTP request methods are GET, POST, PUT, DELETE, etc.

	-HL GET: GET is an HTTP request method used to request data from a specified resource.

	-HL POST: POST is an HTTP request method that requests the webserver to accept the data enclosed in the body of the request message.
*/

// fake Animal data
const fakeDataGet = { animal: "cat", fact: "best pet" };

app.get("/fakeAnimalData", (req, res) => {
  res.send(fakeDataGet);
});

const fakeDataPOST = [];
app.post("/addFake", (req, res) => {
  newEntry = {
    animal: req.body.animal,
    fact: req.body.fact,
    fav: req.body.fav,
  };

  fakeDataPOST.push(newEntry);
  console.log(fakeDataPOST);
});

app.get("/all", (req, res) => {
  res.send(fakeDataPOST);
});
