import db from "../models/index";

// Read Order
const readOrder = async (idUser) => {
  try {
    let data = await db.Order.findAll({
      attributes: ["id", "userId", "status", "createdAt"],
      order: [["id", "ASC"]],
      where: { userId: idUser },
    })
    return { EM: "Read order success", EC: 0, DT: data, };
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readOrderWithPagination = async (page, limit, idUser) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Order.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "userId", "status", "createdAt"],
      order: [["id", "ASC"]],
      where: { userId: idUser },
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, order: rows, };
    return { EM: "Read order success", EC: 0, DT: data, };
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

// Create Order
const createOrder = async (idUser) => {
  try {
    let data = await db.Order.create({
      userId: idUser,
    });
    return { EM: "A order is created successfully!", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

// Update Order
// const updateOrder = async (data) => {
//   try {
//     let order = await db.Order.findOne({
//       where: {
//         id: data.id,
//       },
//     });
//     if (order) {
//       await order.update({
//         name: data.name,
//       });
//       return {
//         EM: "Update order success",
//         EC: 0,
//         DT: [],
//       };
//     } else {
//       return {
//         EM: "Order not exist",
//         EC: 2,
//         DT: [],
//       };
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       EM: "Something wrongs with services",
//       EC: 1,
//       DT: [],
//     };
//   }
// };

// Delete Order
const deleteOrder = async (id) => {
  try {
    let order = await db.Order.findOne({
      where: { id: id, },
    });
    if (order) {
      await order.destroy();
      return { EM: "Delete order success", EC: 0, DT: [], };
    } else {
      return { EM: "Order not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = {
  readOrder,
  readOrderWithPagination,
  createOrder,
  // updateOrder,
  deleteOrder,
};
