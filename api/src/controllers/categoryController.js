import categoryService from "../services/categoryService";

// Read Category
const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await categoryService.readCategoryWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await categoryService.readCategory();
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

// Create Category
const createFunc = async (req, res) => {
  try {
    const { name, description } = req.body.data;
    if (!name || !description) {
      return res.status(200).json({
        EM: "Missing Required Parameters",
        EC: 1,
        DT: "",
      });
    }
    let data = await categoryService.createCategory(req.body.data);
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

// Update Category
const updateFunc = async (req, res) => {
  try {
    let data = await categoryService.updateCategory(req.body.data);
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

// Delete Category
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await categoryService.deleteCategory(id);
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
