import userService from "../services/userService";

const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      data = await userService.getUserWithPagination(+page, +limit);
    } else if (req.query.idUser) {
      let { idUser } = req.query
      data = await userService.getUserById(+idUser);
    } else {
      data = await userService.getAllUser();
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

const createFunc = async (req, res) => {
  try {
    const { lastName, firstName, phone, password, email, sex, groupId } = req.body.data;
    if (!lastName || !firstName || !phone || !password || !email || !sex || !groupId) {
      return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: "", });
    }
    if (password && password.length < 6) {
      return res.status(200).json({ EM: "Your password must have more than 6 letters", EC: "1", DT: "", });
    }
    let data = await userService.createNewUser(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const updateFunc = async (req, res) => {
  try {
    let data = await userService.updateUser(req.body.data);
    res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await userService.deleteOneUser(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
