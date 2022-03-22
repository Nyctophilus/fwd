/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 8000;
/* Spin up the server*/
const server = app.listen(port, () => {
  // console.log(server);
  console.log(`fwd running on localhost: ${port}`);
});

app.get("/all", function (req, res) {
  res.send(projectData);
});

// FIXME 		POST method route

//   post nasa
let NASAdata = [];

app.post("/nasa", (req, res) => {
  newEntry = {
    planet: req.body.planet,
    facts: req.body.fact,
    fav: req.body.fav,
  };

  NASAdata.push(newEntry);

  console.log(NASAdata);
});
