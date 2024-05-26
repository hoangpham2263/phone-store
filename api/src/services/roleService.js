import db from "../models/index";

const readRole = async () => {
  try {
    let data = await db.Role.findAll({
      attributes: ["id", "url", "description"],
      order: [["description", "ASC"]],
    });
    return { EM: "Read user success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readRolesWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Role.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "url", "description"],
      order: [["description", "ASC"]],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, roles: rows, };
    return { EM: "Read user success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createRole = async (data) => {
  try {
    await db.Role.create({ url: data.url, description: data.description, });
    return { EM: "A role is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateRole = async (data) => {
  try {
    let role = await db.Role.findOne({ where: { id: data.id, }, });
    if (role) {
      await role.update({ url: data.url, description: data.description, });
      return { EM: "Update role success", EC: 0, DT: [], };
    } else {
      return { EM: "Role not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteRole = async (id) => {
  try {
    let role = await db.Role.findOne({ where: { id: id, }, });
    if (role) {
      await role.destroy();
      return { EM: "Delete role success", EC: 0, DT: [], };
    } else {
      return { EM: "Role not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = { readRole, readRolesWithPagination, createRole, updateRole, deleteRole };
