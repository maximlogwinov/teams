const express = require("express");
const Router = express.Router();
const { Project } = require('../models');

const route = Router.get(
  "/getproject", 
  async (req, res) => {
    console.log(req.body);
    const project = await Project.findOne({
      where: {name: req.body.name}
    });

    res.send(project.coachId);
  }
);

module.exports = route;