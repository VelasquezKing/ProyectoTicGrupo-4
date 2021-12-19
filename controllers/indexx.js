//Requires libraries
const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
//Imports
let dbConector = require("./dbConector");
//Configuration app
const port = 8080;
//INITIALIZATION
const app = express();
//Accpt "all" headers
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//Regist routes
app.post("/torneos", async (req, res) => {
  let data = await dbConector.findData("torneos", {
    username: req.body.username,
    password: req.body.password,
  });
  res.send(data);
});

//Awake server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
