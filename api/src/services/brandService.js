import db from "../models/index";

// Read Brand
const readBrand = async () => {
  try {
    let data = await db.Brand.findAll({
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    return {
      EM: "Read brand success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};
const readBrandWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Brand.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      brand: rows,
    };
    return {
      EM: "Read brand success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

// Create Brand
const createBrand = async (data) => {
  try {
    await db.Brand.create({
      name: data.name,
    });
    return {
      EM: "A brand is created successfully!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

// Update Brand
const updateBrand = async (data) => {
  try {
    let brand = await db.Brand.findOne({
      where: {
        id: data.id,
      },
    });
    if (brand) {
      await brand.update({
        name: data.name,
      });
      return {
        EM: "Update brand success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Brand not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

// Delete Brand
const deleteBrand = async (id) => {
  try {
    let brand = await db.Brand.findOne({
      where: {
        id: id,
      },
    });
    if (brand) {
      await brand.destroy();
      return {
        EM: "Delete brand success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Brand not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  readBrand,
  readBrandWithPagination,
  createBrand,
  updateBrand,
  deleteBrand,
};
