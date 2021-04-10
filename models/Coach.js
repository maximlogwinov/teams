'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
    Coach.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      require:true,
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
    middleName: {
      type: DataTypes.STRING,
      require: true
    },
  },
  {
    sequelize,
    modelName: "Coach",
  }
);
  return Coach;
};