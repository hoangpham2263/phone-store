import db from "../models/index";

const readGroupRole = async () => {
  try {
    let data = await db.Group_Role.findAll({
      attributes: ["id", "groupId", "roleId"],
      order: [["groupId", "ASC"]],
      include: [{ model: db.Group, attributes: ["id", "name", "description"] }, { model: db.Role, attributes: ["id", "url", "description"] },],
    });
    return { EM: "Read group role success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const readGroupRoleWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Group_Role.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "groupId", "roleId"],
      order: [["groupId", "ASC"]],
      include: [{ model: db.Group, attributes: ["id", "name", "description"] }, { model: db.Role, attributes: ["id", "url", "description"] },],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, groupRole: rows, };
    return { EM: "Read group role success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createGroupRole = async (data) => {
  try {
    await db.Group_Role.create({ GroupId: data.groupId, RoleId: data.roleId, });
    return { EM: "A group role is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateGroupRole = async (data) => {
  try {
    let group = await db.Group_Role.findOne({ where: { id: data.id, }, });
    if (group) {
      await group.update({ groupId: data.groupId, roleId: data.roleId, });
      return { EM: "Update group role success", EC: 0, DT: [], };
    } else {
      return { EM: "Group role not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteGroupRole = async (id) => {
  try {
    let groupRole = await db.Group_Role.findOne({ where: { id: id, }, });
    if (groupRole) {
      await groupRole.destroy();
      return { EM: "Delete group role success", EC: 0, DT: [], };
    } else {
      return { EM: "Group Role not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};
module.exports = { readGroupRole, readGroupRoleWithPagination, createGroupRole, updateGroupRole, deleteGroupRole };
