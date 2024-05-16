"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Districts.belongsTo(models.Cities);
    }
  }
  Districts.init(
    {
      name: DataTypes.STRING,
      citiesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Districts",
    }
  );
  return Districts;
};
