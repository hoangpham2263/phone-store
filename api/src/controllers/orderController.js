import orderService from "../services/orderService";

// Read Order
const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.page && req.query.limit && req.query.idUser) {
      let { page, limit, idUser } = req.query;
      data = await orderService.readOrderWithPagination(+page, +limit, +idUser);
    } else {
      let { idUser } = req.query;
      data = await orderService.readOrder(+idUser);
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Create Order
const createFunc = async (req, res) => {
  try {
    const { idUser } = req.body;
    if (!idUser) return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: [], });
    let data = await orderService.createOrder(idUser);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Delete Order
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await orderService.deleteOrder(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { createFunc, readFunc, deleteFunc };
