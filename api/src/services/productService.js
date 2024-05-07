import db from "../models/index";
const { Op } = require("sequelize");

const readProduct = async () => {
  try {
    let data = await db.Product.findAll({
      attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithCategories = async (page, limit, categories) => {
  try {
    const isFindCategories = await db.Categories.findOne({
      attributes: ["id", "name"],
      where: { url: categories },
    });
    if (isFindCategories) {
      let offset = (page - 1) * limit;
      let { count, rows } = await db.Product.findAndCountAll({
        where: { categoriesId: isFindCategories.id },
        offset: offset,
        limit: limit,
        attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
        order: [["title", "ASC"]],
        include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
      });
      const totalPages = Math.ceil(count / limit);
      let data = { totalRows: count, totalPages: totalPages, products: rows, };
      return { EM: "Read product success", EC: 0, DT: data, };
    }
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithSearch = async (page, limit, search) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
      order: [["title", "ASC"]],
      where: { [Op.or]: { title: { [Op.like]: `%${search}%`, }, }, },
      include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, products: rows, };
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, products: rows, };
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductId = async (id) => {
  try {
    let data = await db.Product.findOne({
      attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
      include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
      where: { id: id },
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductDetail = async (slug) => {
  try {
    let data = await db.Product.findOne({
      where: { slug: slug },
      attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name"] }, { model: db.Brand, attributes: ["id", "name"] }],
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createProduct = async (data) => {
  try {
    await db.Product.create({
      title: data.title,
      price: data.price,
      version: data.version,
      quantity: data.quantity,
      image: data.image,
      capacity: data.capacity,
      color: data.color,
      percentDiscount: data.percentDiscount,
      categoriesId: data.categoriesId,
    });
    return { EM: "A product is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    console.log(error)
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateProduct = async (data) => {
  try {
    let isProduct = await db.Product.findOne({ where: { id: data.id, }, attributes: ["id", "title", "categoriesId", "brandId"], });
    if (isProduct) {
      if (data.image.length > 0 && data.capacity.length) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          image: data.image,
          capacity: data.capacity,
          color: data.color,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else if (data.image.length > 0) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          image: data.image,
          color: data.color,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else if (data.capacity.length > 0) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          capacity: data.capacity,
          color: data.color,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          color: data.color,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      }
    } else {
      return { EM: "Product not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteProduct = async (id) => {
  try {
    let isProduct = await db.Product.findOne({ where: { id: id, }, attributes: ["id", "title", "categoriesId", "brandId"], });
    if (isProduct) {
      await isProduct.destroy();
      return { EM: "Delete product success", EC: 0, DT: [], };
    } else {
      return { EM: "Product not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = {
  readProduct,
  readProductWithCategories,
  readProductWithSearch,
  readProductWithPagination,
  readProductDetail,
  readProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
