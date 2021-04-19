const express = require("express");
const Router = express.Router();
const { Student, Team } = require('../models');

const route = Router.post(
  "/poststudent", 
  async (req, res) => {
    console.log(req.body);

    

    const numberOfStudents = await Student.count({
      where: {
        teamId: req.body.teamId
      }
    });
    // if(!team) {
    //   return res.sendStatus(400).json({errors: "error team"})
    // }

    
    try {
      const team = await Team.findOne({
        where: {
          id: req.body.teamId
        }
      });

      if (!team) {
        throw new Error("Team does not exist");
      }

      if(numberOfStudents >= 6) {
        throw new Error("No place");
      }

      const student = await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        groupName: req.body.groupName,
        teamId: req.body.teamId,
      }); 
      res.send(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  
  }
);

module.exports = route;