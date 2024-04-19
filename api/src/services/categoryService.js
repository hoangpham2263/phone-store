import db from "../models/index";

// Read Category
const readCategory = async () => {
  try {
    let data = await db.Category.findAll({
      attributes: ["id", "name", "description"],
      order: [["name", "ASC"]],
    });
    return {
      EM: "Read category success",
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
const readCategoryWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Category.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "name", "description"],
      order: [["name", "ASC"]],
    });
    const totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      categorys: rows,
    };
    return {
      EM: "Read category success",
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

// Create Category
const createCategory = async (data) => {
  try {
    await db.Category.create({
      name: data.name,
      description: data.description,
    });
    return {
      EM: "A category is created successfully!",
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

// Update Category
const updateCategory = async (data) => {
  try {
    let category = await db.Category.findOne({
      where: {
        id: data.id,
      },
    });
    if (category) {
      await category.update({
        name: data.name,
        description: data.description,
      });
      return {
        EM: "Update category success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Category not exist",
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

// Delete Category
const deleteCategory = async (id) => {
  try {
    let category = await db.Category.findOne({
      where: {
        id: id,
      },
    });
    if (category) {
      await category.destroy();
      return {
        EM: "Delete category success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Category not exist",
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
  readCategory,
  readCategoryWithPagination,
  createCategory,
  updateCategory,
  deleteCategory,
};
