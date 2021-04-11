const express = require("express");
const Router = express.Router();
const { Coach } = require('../models');

const post = Router.post(
  "/postcoach", 
  async (req, res) => {
    console.log(req.body);
    const coach = await Coach.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleName: req.body.middleName
    });

    res.send(coach);
  }
);



module.exports = post;