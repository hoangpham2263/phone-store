import db from "../models/index";
const { Op } = require("sequelize");

const readCart = async (idUser) => {
  try {
    let data = await db.Cart.findAll({
      attributes: ["id", "userId", "productId"],
      order: [["userId", "ASC"]],
      where: { userId: idUser },
    });
    return { EM: "Read cart success", EC: 0, DT: data, };
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readCartTotal = async (idUser) => {
  try {
    let countProduct = 0
    let data = await db.Cart.findAll({
      attributes: ["id", "userId", "productId"],
      order: [["userId", "ASC"]],
      where: { userId: idUser },
    });
    if (data.length > 0) { countProduct = data.length }
    return { EM: "Read cart success", EC: 0, DT: countProduct, };
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readCartWithIdUser = async (page, limit, idUser) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Cart.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "userId", "productId"],
      order: [["userId", "ASC"]],
      where: { userId: idUser },
      include: [{ model: db.User, attributes: ["id", "lastName", "firstName", "phone", "email", "address", "sex"] }, { model: db.Product, attributes: ["id", "title", "price", "version", "quantity", "image", "capacity", "color", "percentDiscount", "slug", "categoriesId", "brandId"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, carts: rows, };
    return { EM: "Read cart success", EC: 0, DT: data, };
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createCart = async (idUser, idProduct) => {
  try {
    let isUser = await db.Cart.findOne({
      where: { [Op.and]: [{ userId: idUser }, { productId: idProduct }] },
    });
    if (isUser) {
      return { EM: "Product is already in cart!", EC: 1, DT: [], };
    }
    await db.Cart.create({ UserId: idUser, ProductId: idProduct, });
    return { EM: "Added product successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateCart = async (data) => {
  try {
    let role = await db.Cart.findOne({
      where: { id: data.id, },
    });
    if (role) {
      await role.update({
        url: data.url,
        description: data.description,
      });
      return { EM: "Update role success", EC: 0, DT: [], };
    } else {
      return { EM: "Cart not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteCart = async (idUser, idProduct) => {
  try {
    let cart = await db.Cart.findOne({
      where: { [Op.and]: [{ userId: idUser }, { productId: idProduct }] },
    });
    if (cart) {
      await cart.destroy();
      return { EM: "Delete cart success", EC: 0, DT: [], };
    } else {
      return { EM: "Cart not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = {
  readCart,
  readCartTotal,
  readCartWithIdUser,
  createCart,
  updateCart,
  deleteCart,
};
