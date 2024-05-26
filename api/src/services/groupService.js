import db from "../models/index";

const readGroup = async () => {
  try {
    let data = await db.Group.findAll({
      attributes: ["id", "name", "description"],
      order: [["name", "ASC"]],
    });
    return { EM: "Get groups success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const readGroupWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Group.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "name", "description"],
      order: [["name", "ASC"]],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, groups: rows, };
    return { EM: "Read user success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createGroup = async (data) => {
  try {
    await db.Group.create({ name: data.name, description: data.description, });
    return { EM: "A group is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateGroup = async (data) => {
  try {
    let group = await db.Group.findOne({ where: { id: data.id, }, });
    if (group) {
      await group.update({ name: data.name, description: data.description, });
      return { EM: "Update group success", EC: 0, DT: [], };
    } else {
      return { EM: "Group not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteGroup = async (id) => {
  try {
    let group = await db.Group.findOne({ where: { id: id, }, });
    if (group) {
      await group.destroy();
      return { EM: "Delete group success", EC: 0, DT: [], };
    } else {
      return { EM: "Group not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};
module.exports = { readGroup, readGroupWithPagination, createGroup, updateGroup, deleteGroup };
