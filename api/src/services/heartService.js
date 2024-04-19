import db from "../models/index";
const { Op } = require("sequelize");

const readHeart = async (userId) => {
  try {
    let data = await db.Heart.findAll({
      attributes: ["id", "UserId", "ProductId"],
      order: [["UserId", "ASC"]],
      where: { UserId: userId },
    });
    return {
      EM: "Read heart success",
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
const readProductCheckHeart = async (productId, userId) => {
  try {
    let isData = await db.Heart.findOne({
      attributes: ["id", "UserId", "ProductId"],
      order: [["UserId", "ASC"]],
      where: {
        [Op.and]: [{ ProductId: productId }, { UserId: userId }],
      },
    });
    if (isData) {
      return {
        EM: "Check heart True",
        EC: 0,
        DT: isData,
      };
    }
    return {
      EM: "Check heart False",
      EC: 1,
      DT: isData,
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

const readHeartWithPagination = async (page, limit, userId) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Heart.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "UserId", "ProductId"],
      order: [["UserId", "ASC"]],
      where: { UserId: userId },
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      hearts: rows,
    };
    return {
      EM: "Read heart success",
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

const createHeart = async (userId, productId) => {
  try {
    let isUser = await db.Heart.findOne({
      where: { [Op.and]: [{ UserId: userId }, { ProductId: productId }] },
    });
    if (isUser) {
      return {
        EM: "Product is already in favourite!",
        EC: 1,
        DT: [],
      };
    }
    await db.Heart.create({
      UserId: userId,
      ProductId: productId,
    });
    return {
      EM: "Added product successfully!",
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

const updateRole = async (data) => {
  try {
    let role = await db.Role.findOne({
      where: {
        id: data.id,
      },
    });
    if (role) {
      await role.update({
        url: data.url,
        description: data.description,
      });
      return {
        EM: "Update role success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Role not exist",
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

const deleteHeart = async (userId, productId) => {
  try {
    let heart = await db.Heart.findOne({
      where: { [Op.and]: [{ UserId: userId }, { ProductId: productId }] },
    });
    if (heart) {
      await heart.destroy();
      return {
        EM: "Delete heart success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Heart not exist",
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
  readHeart,
  readHeartWithPagination,
  readProductCheckHeart,
  createHeart,
  updateRole,
  deleteHeart,
};
