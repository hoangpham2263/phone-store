import groupRoleService from "../services/groupRoleService";

const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      data = await groupRoleService.readGroupRoleWithPagination(+page, +limit);
    } else {
      data = await groupRoleService.readGroupRole();
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};
const createFunc = async (req, res) => {
  try {
    const { groupId, roleId } = req.body.data;
    if (!groupId || !roleId) return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: "", });
    let data = await groupRoleService.createGroupRole(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};
const updateFunc = async (req, res) => {
  try {
    let data = await groupRoleService.updateGroupRole(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await groupRoleService.deleteGroupRole(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
