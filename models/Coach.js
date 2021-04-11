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
      Coach.associate = models => {
        Coach.hasMany(models.Project, {
          foreignKey: 'id'
        });
      };
      // define association here
    }
  }
  Coach.init({
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Coach',
  });
  return Coach;
};