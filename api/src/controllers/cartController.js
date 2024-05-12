import cartService from "../services/cartService";

const readFunc = async (req, res) => {
  const { page, limit, idUser } = req.query
  try {
    if (page && limit && idUser) {
      let { page, limit } = req.query;
      let data = await cartService.readCartWithIdUser(+page, +limit, +idUser);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    } else if (idUser) {
      let data = await cartService.readCartTotal(+idUser);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    } else {
      let data = await cartService.readCart(+userId);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const createFunc = async (req, res) => {
  try {
    const { idUser, idProduct } = req.body.data
    let data = await cartService.createCart(+idUser, +idProduct);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const updateFunc = async (req, res) => {
  // try {
  //   let data = await cartService.updateRole(req.body.data);
  //   return res.status(200).json({
  //     EM: data.EM,
  //     EC: data.EC,
  //     DT: data.DT,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({
  //     EM: "Error from server",
  //     EC: -1,
  //     DT: [],
  //   });
  // }
};

const deleteFunc = async (req, res) => {
  try {
    const { idUser, idProduct } = req.body
    let data = await cartService.deleteCart(+idUser, +idProduct);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
