import categoriesService from "../services/categoriesService";

// Read Categories
const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await categoriesService.readCategoriesWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await categoriesService.readCategories();
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

// Create Categories
const createFunc = async (req, res) => {
  try {
    const { name, url } = req.body.data;
    if (!name || !url) {
      return res.status(200).json({
        EM: "Missing Required Parameters",
        EC: 1,
        DT: "",
      });
    }
    let data = await categoriesService.createCategories(req.body.data);
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

// Update Categories
const updateFunc = async (req, res) => {
  try {
    let data = await categoriesService.updateCategories(req.body.data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    s;
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Delete Categories
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await categoriesService.deleteCategories(id);
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
