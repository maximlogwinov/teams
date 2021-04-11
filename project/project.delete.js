const express = require("express");
const Router = express.Router();
const { Project } = require("../models");

const route = Router.delete("/delete/:id", 
  async (req, res) => {
    const deletedproject = await Project.destroy({where: {id: req.params.id}});

    res.send("удален");
});

module.exports = route;