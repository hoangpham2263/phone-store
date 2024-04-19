import heartService from "../services/heartService";

const readFunc = async (req, res) => {
  const userId = req.user.groupWithRoles.id;
  try {
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await heartService.readHeartWithPagination(+page, +limit, +userId);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else if (req.query.productId) {
      let { productId } = req.query;
      let data = await heartService.readProductCheckHeart(+productId, +userId);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await heartService.readHeart(+userId);
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
    let data = await heartService.createHeart(+userId, +productId);
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
  //   let data = await heartService.updateRole(req.body.data);
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
    let data = await heartService.deleteHeart(+userId, +productId);
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
