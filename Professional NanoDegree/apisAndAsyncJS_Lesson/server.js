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

// app.use(express.static("website")); // connects server code to client code

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
app.post("/", (req, res) => {
  console.log(req.body);
});
