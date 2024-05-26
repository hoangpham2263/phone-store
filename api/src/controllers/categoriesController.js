import categoriesService from "../services/categoriesService";

// Read Categories
const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      data = await categoriesService.readCategoriesWithPagination(+page, +limit);
    } else {
      data = await categoriesService.readCategories();
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Create Categories
const createFunc = async (req, res) => {
  try {
    const { name } = req.body.data;
    if (!name) return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: "", });
    let data = await categoriesService.createCategories(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Update Categories
const updateFunc = async (req, res) => {
  try {
    let data = await categoriesService.updateCategories(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Delete Categories
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await categoriesService.deleteCategories(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
