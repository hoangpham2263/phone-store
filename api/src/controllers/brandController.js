import brandService from "../services/brandService";

// Read Brand
const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      data = await brandService.readBrandWithPagination(+page, +limit);
    } else {
      data = await brandService.readBrand();
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Create Brand
const createFunc = async (req, res) => {
  try {
    const { name } = req.body.data;
    if (!name) {
      return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: "", });
    }
    let data = await brandService.createBrand(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Update Brand
const updateFunc = async (req, res) => {
  try {
    let data = await brandService.updateBrand(req.body.data);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Delete Brand
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await brandService.deleteBrand(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
