const express = require('express');
const Router = express.Router();
const app = express();
const bodyParser = require("body-parser");

app.listen(3000 ,(req, res) => {
  console.log("Server has started");
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/team", require("./team/team.post.js"));
app.use("/teams", require("./team/team.get.js"));
app.use("/team", require("./team/team.delete.js"));