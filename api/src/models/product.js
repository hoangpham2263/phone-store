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
      Product.belongsTo(models.Categories, { foreignKey: 'categoriesId' });
      Product.belongsToMany(models.User, { through: "Heart" });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      version: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      imageAvatar: DataTypes.JSON,
      imageDetail: DataTypes.JSON,
      colors: DataTypes.JSON,
      percentDiscount: DataTypes.INTEGER,
      // description: DataTypes.STRING,
      slug: DataTypes.STRING,
      categoriesId: DataTypes.INTEGER,
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
