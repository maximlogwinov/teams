'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Team.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      require: true,
    },
    name: {
      type: DataTypes.STRING,
      require: true
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Project",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};