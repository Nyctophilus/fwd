/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`old running on localhost: ${port}`);
}

// TODO-ROUTES!

// respond with "hello world" when a GET request is made to the homepage

// 1st argu is the url path
// The req parameter signifies the "request" from the client to the server. The res parameter signifies the "response" from the server to the client.

// -HL the route 'localhost:3000/all' will now trigger the GET request, which will return the js object

// -HL a request, which is the data provided by the GET request,
// -HL a response, which is the data returned to the GET request.

app.get("/all", function (req, res) {
  res.send(projectData);
});

// FIXME 		POST method route

// POST route
app.post("/add", callBack);
function callBack(req, res) {
  res.send("POST received");
}

const movies = [];
app.post("/addMovie", addMovie);
function addMovie(req, res) {
  let newData = req.body;
  let newEntry = {
    Moive: newData.movie,
    Score: newData.score,
    Animal: newData.Animal,
  };
  movies.push(newEntry);
  res.send(movies);
  console.log(movies);
}

const data = [];
app.post("/flavor", addFlavor);
function addFlavor(req, res) {
  data.push(req.body);
}

// get fake animalData
const fakeData = [
  {
    animal: "cat",
    fact: "Cats are fun",
  },
];
app.get("/getFakeData", function (req, res) {
  console.log(fakeData);
  res.send(fakeData);
});

//   post fake
let animalData = [];
app.post("/addAnimal", addAnimal);

function addAnimal(req, res) {
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav,
  };

  animalData.push(newEntry);
  console.log(animalData);
}

//   post nasa
let NASAdata = [];
app.post("/nasa", (req, res) => {
  //   newEntry = {
  //     planet: req.body.planet,
  //     facts: req.body.fact,
  //     fav: req.body.fav,
  //   };

  //   NASAdata.push(newEntry);

  res.send("heey from nasa");
  console.log(NASAdata);
});
