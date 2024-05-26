import cartService from "../services/cartService";

const readFunc = async (req, res) => {
  try {
    let data
    const { page, limit, idUser } = req.query
    if (page && limit && idUser) {
      let { page, limit } = req.query;
      data = await cartService.readCartWithIdUser(+page, +limit, +idUser);
    } else if (idUser) {
      data = await cartService.readCartTotal(+idUser);
    } else {
      data = await cartService.readCart(+userId);
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Read cart with orderId
const readFuncCartOrderId = async (req, res) => {
  try {
    let { idOrder } = req.query;
    let data = await cartService.readCartWithOrderId(+idOrder);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const createFunc = async (req, res) => {
  try {
    let data = await cartService.createCart(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const addFunc = async (req, res) => {
  try {
    let data = await cartService.addCart(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const updateFunc = async (req, res) => {
  try {
    const { idCart, idOrder } = req.body
    let data = await cartService.updateCart(idCart, idOrder);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const deleteFunc = async (req, res) => {
  try {
    const { idUser, idProduct } = req.body
    let data = await cartService.deleteCart(+idUser, +idProduct);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, readFuncCartOrderId, createFunc, addFunc, updateFunc, deleteFunc };
