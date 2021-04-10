const express = require("express");
const Router = express.Router();
const { Coach, Project, Team, Student } = require("../models/");

const get = Router.get("/", async (req, res) => {

  res.send("Gottcha");
});

module.exports = get;