'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.associate = models => {
        Project.belongsTo(models.Coach);
      };
    }
  };
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      require: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      require: true
    },
    coachId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Coach",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};