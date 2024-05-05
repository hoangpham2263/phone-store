import db from "../models/index";

// Read Categories
const readCategories = async () => {
  try {
    let data = await db.Categories.findAll({
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    return {
      EM: "Read categories success",
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
const readCategoriesWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Categories.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      categories: rows,
    };
    return {
      EM: "Read categories success",
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

// Create Categories
const createCategories = async (data) => {
  try {
    await db.Categories.create({
      name: data.name,
    });
    return {
      EM: "A categories is created successfully!",
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

// Update Categories
const updateCategories = async (data) => {
  try {
    let categories = await db.Categories.findOne({
      where: {
        id: data.id,
      },
    });
    if (categories) {
      await categories.update({
        name: data.name,
      });
      return {
        EM: "Update categories success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Categories not exist",
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

// Delete Categories
const deleteCategories = async (id) => {
  try {
    let categories = await db.Categories.findOne({
      where: {
        id: id,
      },
    });
    if (categories) {
      await categories.destroy();
      return {
        EM: "Delete categories success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Categories not exist",
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
  readCategories,
  readCategoriesWithPagination,
  createCategories,
  updateCategories,
  deleteCategories,
};
