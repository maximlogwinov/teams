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
    }
  };
  Project.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      require: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      require: true
    },
    coachId: {
      type: DataTypes.UUID,
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