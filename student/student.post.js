const express = require("express");
const Router = express.Router();
const { Student } = require('../models');

const route = Router.post(
  "/postteam", 
  async (req, res) => {
    console.log(req.body);
    const team = await Student.create({
      name: req.body.name,
      projectId: req.body.projectId,
    });

    res.send(team);
  }
);

module.exports = route;