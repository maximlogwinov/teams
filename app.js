const express = require('express');
const Router = express.Router();
const app = express();

app.listen(3000 ,(req, res) => {
  console.log("Server has started");
}); 

app.use("/team", require("./team.post.js"));
app.use("/teams", require("./team.get.js"));