"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Order);
    }
  }
  Cart.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      color: DataTypes.STRING,
      capacity: DataTypes.STRING,
      price: DataTypes.FLOAT,
      priceDiscount: DataTypes.FLOAT,
      percentDiscount: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      slug: DataTypes.STRING,
      orderId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
