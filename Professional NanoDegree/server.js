let projectDataEndPoint = ["hei"];

const express = require("express");
const app = express();

// -HL rendering a static files
// take the name of the folder of static files
app.use(express.static("website"));

// allow to acces info come from forms
app.use(express.urlencoded({ extended: true }));

// to parse json from the body
app.use(express.json());

app.set("view engine", "pug");

// -HL middleware is code run between Starting of a request and end of a request

const port = 3000;

// get route
// -request , response , next Func
// -HL this route will invoke when u navigate to that "url"
app.get("/", logger, (req, res) => {
  console.log(`hey from get route server code`);
  //   res.status(500).send("Hello from response send"); //Chain

  //   res.download("performance.js");

  res.render("index", {
    text: "this is passed obj from the server",
  }); // render a file

  //   res.json(projectDataEndPoint);
});

// -HL split routers
const userRouter = require("./routes/users");
app.use("/users", userRouter);

// middleware example
// -HL to define it for all routes ... app.use(logger)
function logger(req, res, next) {
  console.log(
    `${req.originalUrl} .. this is from logger middleware`
  );
  next();
}

app.listen(port);
