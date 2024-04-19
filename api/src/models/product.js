import slugify from "slugify";

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.User, { through: "Heart" });
    }
  }
  Product.init(
    {
      categoryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      imageAvatar: DataTypes.JSON,
      imageDetail: DataTypes.JSON,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      numberOfFloors: DataTypes.INTEGER,
      width: DataTypes.FLOAT,
      length: DataTypes.FLOAT,
      roomNumber: DataTypes.INTEGER,
      facade: DataTypes.INTEGER,
      productCode: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      hooks: {
        beforeValidate: (product, options) => {
          if (product.title) {
            product.slug = slugify(product.title, { lower: true });
          }
        },
      },
    }
  );
  return Product;
};
