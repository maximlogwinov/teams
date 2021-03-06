const express = require("express");
const Router = express.Router();
const { Team } = require("../models");

const route = Router.delete("/delete/:id", 
  async (req, res) => {
    const deletedTeam = await Team.destroy({where: {id: req.params.id}});

    res.send("удален");
});

module.exports = route;