const express = require("express");
const Router = express.Router();
const { Coach } = require("../models/");

const route = Router.delete("/delete/:id", 
  async (req, res) => {
    const deletedCoach = await Coach.destroy({where: {firstName: req.params.id}});

    res.send("удален");
});

module.exports = route;