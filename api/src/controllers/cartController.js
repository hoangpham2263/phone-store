import cartService from "../services/cartService";

const readFunc = async (req, res) => {
  const userId = req.user.groupWithRoles.id;
  try {
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await cartService.readCartWithPagination(+page, +limit, +userId);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else if (req.query.productId) {
      let { productId } = req.query;
      let data = await cartService.readProductCheckCart(+productId, +userId);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await cartService.readCart(+userId);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

const createFunc = async (req, res) => {
  try {
    const userId = req.user.groupWithRoles.id;
    const productId = req.body.data.id;
    let data = await cartService.createCart(+userId, +productId);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
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
    const userId = req.user.groupWithRoles.id;
    let productId = req.body.id;
    let data = await cartService.deleteCart(+userId, +productId);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
