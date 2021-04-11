const express = require("express");
const Router = express.Router();
const { Project } = require('../models');

const route = Router.post(
  "/postproject", 
  async (req, res) => {
    console.log(req.body);
    const project = await Project.create({
      name: req.body.name,
      coachId: req.body.coachId,
    });

    res.send(project);
  }
);

module.exports = route;
