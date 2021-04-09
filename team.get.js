const express = require("express");
const Router = express.Router();

const get = Router.get("/", async (req, res) => {
  res.send("Gottcha")
});

module.exports = get;