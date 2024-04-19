import db from "../models/index";
const { Op } = require("sequelize");

// Read Product
const readProduct = async () => {
  try {
    let data = await db.Product.findAll({
      attributes: [
        "id",
        "categoryId",
        "title",
        "imageAvatar",
        "imageDetail",
        "description",
        "price",
        "numberOfFloors",
        "width",
        "length",
        "roomNumber",
        "facade",
        "productCode",
        "slug",
      ],
      order: [["title", "ASC"]],
      include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
    });
    return {
      EM: "Read product success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};
const readProductWithCategory = async (page, limit, category) => {
  try {
    const isFindCategory = await db.Category.findOne({
      attributes: ["id", "name", "description"],
      where: { description: category },
    });
    if (isFindCategory) {
      let offset = (page - 1) * limit;
      let { count, rows } = await db.Product.findAndCountAll({
        where: { categoryId: isFindCategory.id },
        offset: offset,
        limit: limit,
        attributes: [
          "id",
          "categoryId",
          "title",
          "imageAvatar",
          "imageDetail",
          "description",
          "price",
          "numberOfFloors",
          "width",
          "length",
          "roomNumber",
          "facade",
          "productCode",
          "slug",
        ],
        order: [["title", "ASC"]],
        include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
      });
      const totalPages = Math.ceil(count / limit);
      let data = {
        totalRows: count,
        totalPages: totalPages,
        products: rows,
      };
      return {
        EM: "Read product success",
        EC: 0,
        DT: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};
const readProductWithSearch = async (page, limit, search) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "categoryId",
        "title",
        "imageAvatar",
        "imageDetail",
        "description",
        "price",
        "numberOfFloors",
        "width",
        "length",
        "roomNumber",
        "facade",
        "productCode",
        "slug",
      ],
      order: [["title", "ASC"]],
      where: {
        [Op.or]: {
          title: {
            [Op.like]: `%${search}%`,
          },
        },
      },
      include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      products: rows,
    };
    return {
      EM: "Read product success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};
const readProductWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "categoryId",
        "title",
        "imageAvatar",
        "imageDetail",
        "description",
        "price",
        "numberOfFloors",
        "width",
        "length",
        "roomNumber",
        "facade",
        "productCode",
        "slug",
      ],
      order: [["title", "ASC"]],
      include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      products: rows,
    };
    return {
      EM: "Read product success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

// Read Product Id
const readProductId = async (id) => {
  try {
    let data = await db.Product.findOne({
      attributes: [
        "id",
        "categoryId",
        "title",
        "imageAvatar",
        "imageDetail",
        "description",
        "price",
        "numberOfFloors",
        "width",
        "length",
        "roomNumber",
        "facade",
        "productCode",
        "slug",
      ],
      include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
      where: { id: id },
    });
    return {
      EM: "Read product success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

// Read Product Detail
const readProductDetail = async (slug) => {
  try {
    let data = await db.Product.findOne({
      where: { slug: slug },
      attributes: [
        "id",
        "categoryId",
        "title",
        "imageAvatar",
        "imageDetail",
        "description",
        "price",
        "numberOfFloors",
        "width",
        "length",
        "roomNumber",
        "facade",
        "productCode",
        "slug",
      ],
      // order: [["title", "ASC"]],
      include: [{ model: db.Category, attributes: ["id", "name", "description"] }],
    });
    return {
      EM: "Read product success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

// Create Product
const createProduct = async (data) => {
  try {
    await db.Product.create({
      title: data.title,
      imageAvatar: data.imageAvatar,
      imageDetail: data.imageDetail,
      description: data.description,
      price: data.price,
      numberOfFloors: data.numberOfFloors,
      width: data.width,
      length: data.length,
      roomNumber: data.roomNumber,
      facade: data.facade,
      productCode: data.productCode,
      categoryId: data.categoryId,
    });
    return {
      EM: "A product is created successfully!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

// Update Product
const updateProduct = async (data) => {
  try {
    let isProduct = await db.Product.findOne({
      where: {
        id: data.id,
      },
    });
    if (isProduct) {
      if (data.imageAvatar.length > 0) {
        await isProduct.update({
          title: data.title,
          imageAvatar: data.imageAvatar,
          description: data.description,
          price: data.price,
          numberOfFloors: data.numberOfFloors,
          width: data.width,
          length: data.length,
          roomNumber: data.roomNumber,
          facade: data.facade,
          productCode: data.productCode,
          categoryId: data.categoryId,
        });
        return {
          EM: "Update product success",
          EC: 0,
          DT: [],
        };
      } else if (data.imageDetail.length > 0) {
        await isProduct.update({
          title: data.title,
          imageDetail: data.imageDetail,
          description: data.description,
          price: data.price,
          numberOfFloors: data.numberOfFloors,
          width: data.width,
          length: data.length,
          roomNumber: data.roomNumber,
          facade: data.facade,
          productCode: data.productCode,
          categoryId: data.categoryId,
        });
        return {
          EM: "Update product success",
          EC: 0,
          DT: [],
        };
      } else {
        await isProduct.update({
          title: data.title,
          description: data.description,
          price: data.price,
          numberOfFloors: data.numberOfFloors,
          width: data.width,
          length: data.length,
          roomNumber: data.roomNumber,
          facade: data.facade,
          productCode: data.productCode,
          categoryId: data.categoryId,
        });
        return {
          EM: "Update product success",
          EC: 0,
          DT: [],
        };
      }
    } else {
      return {
        EM: "Product not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

// Delete Product
const deleteProduct = async (id) => {
  try {
    let isProduct = await db.Product.findOne({
      where: {
        id: id,
      },
    });
    if (isProduct) {
      await isProduct.destroy();
      return {
        EM: "Delete product success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Product not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  readProduct,
  readProductWithCategory,
  readProductWithSearch,
  readProductWithPagination,
  readProductDetail,
  readProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
