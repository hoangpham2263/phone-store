import { where } from "sequelize";
import db from "../models/index";

const readCities = async () => {
  try {
    let data = await db.Cities.findAll({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
    });
    return {
      EM: "Read cities success",
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

const readCitiesWithId = async (id) => {
  try {
    let data = await db.Cities.findOne({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
      where: { id: id }
    });
    return {
      EM: "Read cities success",
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

module.exports = {
  readCities, readCitiesWithId
};
