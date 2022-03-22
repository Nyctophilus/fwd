const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name); // ?name= ...
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Muhammed" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", {
      firstName: req.body.firstName,
    });
  }
  res.send("Ceated user");
});

// router.get("/id:id", (req, res) => {
//   res.send(`Get User with ID: ${req.params.id}`);
// });

// router.put("/id:id", (req, res) => {
//   res.send(`Update User with ID: ${req.params.id}`);
// });

// router.delete("/id:id", (req, res) => {
//   res.send(`delete User with ID: ${req.params.id}`);
// });

// -HL to chain routes with same path
router
  .route("/id:id")
  .get((req, res) => {
    res.send(`Get User with ID: ${req.params.id}`);
    // console.log(req.user);
  })
  .put((req, res) => {
    res.send(`Update User with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID: ${req.params.id}`);
  });

const users = [{ name: "muhammed" }, { name: "lana" }];
router.param("id", (req, res, next, value) => {
  req.user = users[value];
  next(); // to tell the param method to finish
});

module.exports = router;
