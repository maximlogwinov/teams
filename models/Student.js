'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Student.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      require: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      require: true
    },
    lastName: {
      type: DataTypes.STRING,
      require: true
    },
    groupName: {
      type: DataTypes.STRING,
      require: true
    },
    teamId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Team",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};